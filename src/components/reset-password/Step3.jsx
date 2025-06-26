import { useTranslation } from "react-i18next";
import SubmitButton from "../../ui/forms/SubmitButton";
import PasswordField from "../../ui/forms/PasswordField";

export default function Step3({ setStep }) {
  const { t } = useTranslation();
  return (
    <>
      <h3 className="section_title">{t("auth.resetPasswordTitle3")}</h3>
      <p className="section_description">{t("auth.resetPasswordSubtitle3")}</p>

      <form className="form_ui mt-5">
        <div className="form_group mb-4">
          <PasswordField
            label={t("auth.newPassword")}
            placeholder={t("auth.enterPassword")}
          />
        </div>

        <div className="form_group mb-4">
          <PasswordField
            label={t("auth.confirmPassword")}
            placeholder={t("auth.enterPassword")}
          />
        </div>

        <div className="reset_btns" onClick={() => setStep(2)}>
          <div aria-label="Back" className="back_btn">
            <i className="fal fa-arrow-right"></i>
          </div>

          <SubmitButton text={t("auth.confirm")} />
        </div>
      </form>
    </>
  );
}
