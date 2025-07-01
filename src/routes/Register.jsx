import { useState } from "react";
import { useTranslation } from "react-i18next";
import RegisterStep1 from "../components/register/RegisterStep1";
import RegisterStep2 from "../components/register/RegisterStep2";
import useRegister from "../hooks/auth/useRegister";

export default function Register() {
  const { t } = useTranslation();
  const [step, setStep] = useState(1);

  const {
    register,
    handleSubmit,
    errors,
    isLoading,
    checkCode,
    setCode,
    submitSendCode,
    watch,
  } = useRegister(t, setStep);

  return (
    <section className="auth_section main_section mt-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 p-2 d-flex flex-column">
            <h3 className="section_title">
              {step === 1 ? t("auth.registerTitle") : t("auth.registerTitle2")}
            </h3>
            <p className="section_description">
              {step === 1
                ? t("auth.registerSubtitle")
                : t("auth.registerSubtitle2")}
            </p>

            {step === 1 && (
              <RegisterStep1
                register={register}
                handleSubmit={handleSubmit(submitSendCode)}
                errors={errors}
                watch={watch}
                isLoading={isLoading}
              />
            )}

            {step === 2 && (
              <RegisterStep2
                email={watch("email")}
                isLoading={isLoading}
                checkCode={checkCode}
                setCode={setCode}
                setStep={setStep}
              />
            )}
          </div>

          <div className="col-lg-6 col-12 p-2 d-lg-block d-none">
            <div className="img">
              <img
                src="/images/auth.jpg"
                alt="auth"
                className="img-fluid rounded"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
