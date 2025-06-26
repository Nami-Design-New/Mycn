import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import InputField from "../ui/forms/InputField";
import PasswordField from "../ui/forms/PasswordField";
import SubmitButton from "../ui/forms/SubmitButton";
import useLogin from "../hooks/auth/useLogin";

export default function Login() {
  const { t } = useTranslation();
  const { register, handleSubmit, errors, isLoading } = useLogin(t);

  return (
    <section className="auth_section main_section mt-100">
      <div className="container">
        <div className="row">

          <div className="col-lg-6 col-12 p-2 d-flex  flex-column">
            <h3 className="section_title">{t("auth.loginTitle")}</h3>
            <p className="section_description">{t("auth.loginSubtitle")}</p>

            <form className="form_ui mt-3" onSubmit={handleSubmit}>
              <div className="form_group">
                <InputField
                  label={t("auth.email")}
                  type="email"
                  placeholder={t("auth.enterEmail")}
                  {...register("email")}
                  error={errors.email?.message}
                />
              </div>

              <div className="form_group">
                <PasswordField
                  label={t("auth.password")}
                  placeholder={t("auth.enterPassword")}
                  {...register("password")}
                  error={errors.password?.message}
                />
              </div>

              <Link to="/reset-password" className="link">
                {t("auth.forgotPassword")}
              </Link>

              <SubmitButton
                text={t("auth.signIn")}
                loading={isLoading}
                className="mt-3"
              />

              <p className="note">
                {t("auth.dontHaveAnAccount")}{" "}
                <Link to="/signup">{t("auth.signUp")}</Link>
              </p>
            </form>
          </div>

          <div className="col-lg-6 col-12 p-2 d-lg-block d-none">
            <div className="img">
              <img src="/images/auth.jpg" alt="auth" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
