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
              toast.custom(
                (t) => (
                  <div
                    className={` max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                  >
                    <div className="flex-1 w-0 p-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 pt-0.5">
                          <img
                            className=" rounded-full"
                            src="/public/icons/correct-icon.png"
                            alt=""
                            width={350}
                            height={350}
                          />
                        </div>
                        <div className="ml-3 mt-4 flex-1">
                          <p className="fs-3 text-center font-bold text-success">
                            Payment Successfully
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex border-l border-gray-200">
                      <button
                        onClick={() => toast.dismiss(t.id)}
                        className="w-100 border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                ),
                { position: "bottom-center" }
              );
            } else if (event.data.status === "failed") {
              toast.custom(
                (t) => (
                  <div
                    className={` max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                  >
                    <div className="flex-1 w-0 p-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 pt-0.5">
                          <img
                            className=" rounded-full"
                            src="/public/icons/red-x-icon.png"
                            alt=""
                            width={350}
                            height={350}
                          />
                        </div>
                        <div className="ml-3 flex-1">
                          <p className="fs-3 text-center font-bold text-danger">
                            Payment failed. Please try again.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex border-l border-gray-200">
                      <button
                        onClick={() => toast.dismiss(t.id)}
                        className="w-100 border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                ),
                { position: "bottom-center" }
              );
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
