import { useTranslation } from "react-i18next";
import SubmitButton from "../../ui/forms/SubmitButton";
import OtpContainer from "./../../ui/forms/OtpContainer";

export default function Step2({ setStep, email }) {
  const { t } = useTranslation();
  return (
    <>
      <h3 className="section_title">{t("auth.resetPasswordTitle2")}</h3>
      <p className="section_description">
        {t("auth.resetPasswordSubtitle2", { email })}
      </p>

      <form className="form_ui mt-5">
        <div className="form_group mb-4">
          <OtpContainer />
        </div>

        <div className="reset_btns" onClick={() => setStep(1)}>
          <div aria-label="Back" className="back_btn">
            <i className="fal fa-arrow-right"></i>
          </div>

          <SubmitButton text={t("auth.confirm")} />
        </div>
      </form>
    </>
  );
}
