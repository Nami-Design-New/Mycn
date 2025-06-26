import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import InputField from "../../ui/forms/InputField";
import SubmitButton from "../../ui/forms/SubmitButton";

export default function Step1() {
  const { t } = useTranslation();

  return (
    <>
      <h3 className="section_title">{t("auth.resetPasswordTitle")}</h3>
      <p className="section_description">{t("auth.resetPasswordSubtitle")}</p>

      <form className="form_ui mt-5">
        <div className="form_group mb-4">
          <InputField
            label={t("auth.email")}
            required
            type="email"
            placeholder={t("auth.enterEmail")}
          />
        </div>
        <div className="reset_btns">
          <Link to="/signin" aria-label="Back" className="back_btn">
            <i className="fal fa-arrow-right"></i>
          </Link>

          <SubmitButton text={t("auth.send")} />
        </div>
      </form>
    </>
  );
}
