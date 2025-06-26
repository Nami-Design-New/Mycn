import { useTranslation } from "react-i18next";
import SubmitButton from "../../ui/forms/SubmitButton";
import OtpContainer from "../../ui/forms/OtpContainer";

export default function RegisterStep2({
  email,
  checkCode,
  setCode,
  isLoading,
  setStep,
}) {
  const { t } = useTranslation();

  return (
    <form
      className="form_ui mt-3"
      onSubmit={(e) => {
        e.preventDefault();
        checkCode();
      }}
    >
      <p className="mb-4">
        {t("auth.verificationCodeSent")} <strong>{email}</strong>
      </p>

      <div className="form_group">
        <OtpContainer setCode={setCode} length={6} disabled={isLoading} />
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
