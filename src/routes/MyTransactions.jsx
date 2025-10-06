import { useTranslation } from "react-i18next";
import { useState } from "react";
import useGetTransactions from "../hooks/profile/useGetTransactions";
import useGetGeneratePayTransaction from "../hooks/profile/useGetGeneratePayTransaction";

export default function MyTransactions() {
  const { t } = useTranslation();

  const [showPopup, setShowPopup] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  // All transactions
  const { data: transactions } = useGetTransactions();

  // Mutation hook to trigger payment generation
  const { mutate: generatePayTransaction, isPending } = useGetGeneratePayTransaction();

  const handlePayClick = (transaction) => {
    setSelectedTransaction(transaction);
    setShowPopup(true);
  };

  const handleConfirmPay = () => {
    if (selectedTransaction) {
      generatePayTransaction(selectedTransaction.id, {
        onSuccess: (data) => {
          console.log("✅ Payment transaction generated:", data);
          alert("تم إنشاء عملية الدفع بنجاح!");
        },
        onError: (error) => {
          console.error("❌ Error generating payment:", error);
          alert("حدث خطأ أثناء إنشاء عملية الدفع.");
        },
      });
    }
    setShowPopup(false);
  };

  return (
    <div className="transactions_history">
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
                  <th>{t("common.status")}</th>
                </tr>
              </thead>

              <tbody>
                {transactions?.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.created_at || "12-01-2025"}</td>
                    <td>{item.amount}</td>
                    <td>{item.notes}</td>
                    <td className="text-center">
                      {item.is_paid ? (
                        "paid "
                      ) : (
                        <button
                          onClick={() => handlePayClick(item)}
                          className="btn btn-primary btn-sm"
                        >
                          {isPending && selectedTransaction?.id === item.id
                            ? "loading.."
                            : " pay now"}
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

      {/* النافذة المنبثقة */}
      {showPopup && (
        <div className="popup_overlay">
          <div className="popup_box">
            <h4>تأكيد عملية الدفع</h4>
            <p>
              هل أنت متأكد أنك تريد الدفع للمعاملة رقم{" "}
              <strong>{selectedTransaction?.id}</strong>؟
            </p>
            <div className="popup_actions">
              <button
                className="btn btn-success btn-sm"
                onClick={handleConfirmPay}
                disabled={isPending}
              >
                {isPending ? "جاري التنفيذ..." : "نعم، ادفع الآن"}
              </button>
              <button
                className="btn btn-secondary btn-sm"
                onClick={() => setShowPopup(false)}
              >
                إلغاء
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
