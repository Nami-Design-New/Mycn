import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import SubmitButton from "../../ui/forms/SubmitButton";
import OtpContainer from "./../../ui/forms/OtpContainer";
import axiosInstance from "../../utils/axiosInstance";

export default function Step2({ setStep, email }) {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axiosInstance.post("/auth/checkCode", {
        email: email,
        code: code,
      });
      if (res.status === 200) {
        toast.success(t("auth.codeVerified", { email }));
        setStep(3);
      }
    } catch (error) {
      toast.error(error.message || t("auth.somethingWentWrong"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h3 className="section_title">{t("auth.resetPasswordTitle2")}</h3>
      <p className="section_description">
        {t("auth.resetPasswordSubtitle2", { email })}
      </p>

      <form className="form_ui mt-5" onSubmit={handleSubmit}>
        <div className="form_group mb-4">
          <OtpContainer setCode={setCode} />
        </div>

        <div className="reset_btns">
          <div
            aria-label="Back"
            className="back_btn"
            onClick={() => setStep(1)}
          >
            <i className="fal fa-arrow-right"></i>
          </div>

          <SubmitButton text={t("auth.confirm")} loading={loading} />
        </div>
      </form>
    </>
  );
}
