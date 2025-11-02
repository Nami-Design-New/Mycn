
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../utils/axiosInstance";
import useGetTransactions from "../hooks/profile/useGetTransactions";
import { X, Check } from "lucide-react";

// Toast Components
const SuccessToast = ({ onClose }) => (
  <>
    <div className="toast-overlay" onClick={onClose}>
      <div className="toast-card" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose} aria-label="Close">
          <X size={24} />
        </button>

        <div className="checkmark-circle">
          <Check size={44} strokeWidth={3} />
        </div>

        <h2 className="toast-title-success">
          Payment Successful
          <span className="celebration-emoji">🎉</span>
        </h2>

        <p className="toast-message">
          Your payment has been successfully processed. Now you can go to the
          homepage & discover new products.
        </p>

        <button className="continue-btn" onClick={onClose}>
          Continue shopping
        </button>
      </div>
    </div>
  </>
);

const ErrorToast = ({ onClose }) => (
  <>
    <div className="toast-overlay" onClick={onClose}>
      <div className="toast-card" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose} aria-label="Close">
          <X size={24} />
        </button>

        <div className="error-circle">
          <X size={44} strokeWidth={3} />
        </div>

        <h2 className="toast-title">Payment Failed</h2>

        <p className="toast-message">Payment failed. Please try again.</p>

        <button className="error-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  </>
);

export default function MyTransactions() {
  const { t } = useTranslation();
  const [loadingId, setLoadingId] = useState(null);
  const [toastType, setToastType] = useState(null); // 'success' | 'error' | null
  const { data: transactions } = useGetTransactions();
  const queryClient = useQueryClient();

  useEffect(() => {
    const handleMessage = (event) => {
      if (!event.data?.status) return;

      if (event.data.status === "success") {
        queryClient.invalidateQueries(["transactions"]);
        setToastType("success");
        // Auto close after 5 seconds
        setTimeout(() => setToastType(null), 5000);
      } else if (event.data.status === "failed") {
        setToastType("error");
        // Auto close after 5 seconds
        setTimeout(() => setToastType(null), 5000);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [queryClient]);

  const handlePayment = async (id) => {
    setLoadingId(id);
    try {
      const res = await axiosInstance.get(
        `/profile/generatePayTransaction/${id}`
      );
      if (res.status === 200 && res.data?.url) {
        const width = 600;
        const height = 600;
        const left = window.screenX + (window.innerWidth - width) / 2;
        const top = window.screenY + (window.innerHeight - height) / 2;

        window.open(
          res.data.url,
          "PaymentWindow",
          `width=${width},height=${height},top=${top},left=${left}`
        );
      }
    } catch (error) {
      console.error("Error fetching generatePayTransaction:", error.message);
      setToastType("error");
      setTimeout(() => setToastType(null), 5000);
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <div className="transactions_history position-relative">
      {toastType === "success" && (
        <SuccessToast onClose={() => setToastType(null)} />
       )} 
      {toastType === "error" && (
        <ErrorToast onClose={() => setToastType(null)} />
      )}

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
                        >
                          {loadingId === item.id
                            ? t("common.loading")
                            : t("common.payNow")}
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
