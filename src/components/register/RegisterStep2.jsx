import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import SubmitButton from "../../ui/forms/SubmitButton";
import OtpContainer from "../../ui/forms/OtpContainer";
import axiosInstance from "../../utils/axiosInstance";

export default function RegisterStep2({
  email,
  checkCode,
  setCode,
  isLoading,
  setStep,
}) {
  const { t } = useTranslation();
  const [timer, setTimer] = useState(60);
  const [resendDisabled, setResendDisabled] = useState(false);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    } else {
      setResendDisabled(false);
    }
  }, [timer]);

  const handleResend = async () => {
    try {
      const res = await axiosInstance.post("/auth/sendOtp", {
        email: email,
        type: "register",
      });
      if (res.status === 200) {
        toast.success(t("auth.resetLinkSent", { email }));
        setResendDisabled(true);
        setTimer(60);
      } else {
        toast.error(t("auth.emailNotFound"));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className="form_ui mt-3"
      onSubmit={(e) => {
        e.preventDefault();
        checkCode();
      }}
    >
      <p className="mb-4">{t("auth.resetPasswordSubtitle2", { email })}</p>

      <div className="form_group">
        <OtpContainer setCode={setCode} length={6} disabled={isLoading} />
      </div>

      <div className="resend-code">
        <span className={`resend_link ${resendDisabled ? "disabled" : ""}`}>
          {t("auth.didnotReceiveCode")}
          <span
            className=""
            style={{ cursor: "pointer" }}
            onClick={handleResend}
          >
            {t("auth.resendCode")}
          </span>
        </span>
        <div
          className="timer flex-row-reverse"
          style={{ justifyContent: "end !important" }}
        >
          <span>
            {Math.floor(timer / 60)
              .toString()
              .padStart(2, "0")}
          </span>
          :<span>{(timer % 60).toString().padStart(2, "0")}</span>
        </div>
      </div>

      <div className="reset_btns">
        <div aria-label="Back" className="back_btn" onClick={() => setStep(1)}>
          <i className="fal fa-arrow-right"></i>
        </div>

        <SubmitButton
          text={t("auth.confirm")}
          loading={isLoading}
          disabled={isLoading}
        />
      </div>
    </form>
  );
}
