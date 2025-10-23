import { useTranslation } from "react-i18next";
import useGetTransactions from "../hooks/profile/useGetTransactions";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../utils/axiosInstance";
import { toast } from "sonner";

export default function MyTransactions() {
  const { t } = useTranslation();

  // const [selectId, setSelectId] = useState(null);
  // const [generatedUrl, setGeneratedUrl] = useState(null);
  const [loadingId, setLoadingId] = useState(null);
  const { data: transactions } = useGetTransactions();

  const queryClient = useQueryClient();
  const handlePayment = async (id) => {
    setLoadingId(id);
    try {
      const res = await axiosInstance.get(
        `/profile/generatePayTransaction/${id}`
      );
      // console.log("res", res);

      if (res.status === 200) {
        if (res.data?.url) {
          // setGeneratedUrl(generatePayTransactionData.url);

          const width = 600;
          const height = 600;
          const left = window.screenX + (window.innerWidth - width) / 2;
          const top = window.screenY + (window.innerHeight - height) / 2;

          const popup = window.open(
            res.data?.url,
            "PaymentWindow",
            `width=${width},height=${height},top=${top},left=${left}`
          );
          window.addEventListener("message", (event) => {
            // console.log("event from payment popup:", event);
            if (event.data.status === "success") {
              queryClient.invalidateQueries(["transactions"]);
              toast.success("Payment completed successfully");
            } else if (event.data.status === "failed") {
              toast.error("Payment failed. Please try again.");
            }

            popup.close();
          });

          // const timer = setInterval(() => {
          //   if (popup?.closed) {
          //     clearInterval(timer);
          //     console.log("Payment window closed");
          //     // refetchTransactions();
          //   }
          // }, 1000);
        }
        return res.data || {};
      }
    } catch (error) {
      console.error("Error fetching generatePayTransaction:", error.message);
      throw error;
    } finally {
      setLoadingId(null);
    }
  };

  // useEffect(() => {
  //   if (handlePayment?.url) {
  //     // setGeneratedUrl(generatePayTransactionData.url);

  //     const width = 600;
  //     const height = 600;
  //     const left = window.screenX + (window.innerWidth - width) / 2;
  //     const top = window.screenY + (window.innerHeight - height) / 2;

  //     const popup = window.open(
  //       handlePayment.url,
  //       "PaymentWindow",
  //       `width=${width},height=${height},top=${top},left=${left}`
  //     );
  //     window.addEventListener("message", (event) => {
  //       console.log(event)
  //       if (event.data === "payment-finished") {
  //         popup.close();
  //         alert("Payment finished!");
  //       }
  //     });

  //     const timer = setInterval(() => {
  //       if (popup?.closed) {
  //         // queryClient.invalidateQueries(["transactions"]);
  //         clearInterval(timer);
  //         console.log("Payment window closed");
  //         // refetchTransactions();
  //       }
  //     }, 1000);
  //   }
  // }, [handlePayment, queryClient]);
  // console.log("generatePayTransactionData", handlePayment);

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
                        t("common.paid")
                      ) : (
                        <button
                          onClick={() => handlePayment(item.id)}
                          className="btn btn-primary btn-sm"
                          // disabled={isLoading && selectId === item.id}
                        >
                          {loadingId === item.id
                            ? t("common.loading")
                            : t("common.payNow")}
                          {/* {loading && selectId === item.id
                            ? t("common.loading")
                            : t("common.payNow")} */}
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
