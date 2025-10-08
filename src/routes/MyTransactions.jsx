import { useTranslation } from "react-i18next";
import useGetTransactions from "../hooks/profile/useGetTransactions";
import { useEffect, useState } from "react";
import useGetGeneratePayTransaction from "../hooks/profile/useGetGeneratePayTransaction";
import { useQueryClient } from "@tanstack/react-query";

export default function MyTransactions() {
  const { t } = useTranslation();

  const [selectId, setSelectId] = useState(null);
  // const [generatedUrl, setGeneratedUrl] = useState(null);

  const { data: transactions } = useGetTransactions();
  const { data: generatePayTransactionData, isLoading } =
    useGetGeneratePayTransaction(selectId, !!selectId);
  const queryClient = useQueryClient();
  
  // ✅ لما الداتا توصل نفتح صفحة الدفع تلقائيًا
  useEffect(() => {
    if (generatePayTransactionData?.url) {
      // setGeneratedUrl(generatePayTransactionData.url);

      // نفتح نافذة دفع في Popup
      const width = 600;
      const height = 600;
      const left = window.screenX + (window.innerWidth - width) / 2;
      const top = window.screenY + (window.innerHeight - height) / 2;

      const popup = window.open(
        generatePayTransactionData.url,
        "PaymentWindow",
        `width=${width},height=${height},top=${top},left=${left}`
      );
window.addEventListener('message', (event) => {
    if (event.data === 'payment-finished') {
        popup.close();
        alert('Payment finished!');
    }
});


      // ✅ ممكن نراقب النافذة لو المستخدم قفلها
      const timer = setInterval(() => {
        if (popup?.closed) {
          queryClient.invalidateQueries(["transactions"] );
          clearInterval(timer);
          console.log("🔒 Payment window closed");
          // ممكن هنا تحدث حالة الدفع من جديد أو تعمل refetch
          // refetchTransactions();
        }
      }, 1000);
    }
  }, [generatePayTransactionData , queryClient]);

  return (
    <div className="transactions_history position-relative">
      <div className="row">
        <div className="col-12 p-2">
          <h3 className="sec_title">{t("profile.transactionsTitle")}</h3>
          <p className="sec_desc">{t("profile.transactionsSubTitle")}</p>
        </div>

        <div className="col-12 p-2 mt-2">
          <div className="table_container">
            <table>
              <thead>
                <tr>
                  <th>{t("common.transactionId")}</th>
                  <th>{t("common.date")}</th>
                  <th>{t("common.amount")}</th>
                  <th>{t("common.desccription")}</th>
                  <th>{t("common.actions")}</th>
                </tr>
              </thead>

              <tbody>
                {transactions?.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.created_at || "12-01-2025"}</td>
                    <td>{item.amount}</td>
                    <td>{item.notes}</td>
                    <td>
                      {item.is_paid ? (
                        t('common.paid')
                      ) : (
                        <button
                          onClick={() => setSelectId(item.id)}
                          className="btn btn-primary btn-sm"
                          disabled={isLoading && selectId === item.id}
                        >
                          {isLoading && selectId === item.id
                            ? t('common.loading')
                            : t('common.payNow')}
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

