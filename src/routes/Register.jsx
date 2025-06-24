import { Form } from "react-bootstrap";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import InputField from "../ui/forms/InputField";
import SelectField from "../ui/forms/SelectField";
import SubmitButton from "../ui/forms/SubmitButton";
import PasswordField from "../ui/forms/PasswordField";
import useGetCountries from "../hooks/settings/useGetCountries";
import useRegisterForm from "../hooks/auth/useRegister";

export default function Register() {
  const { t } = useTranslation();
  const { data: countries } = useGetCountries();
  const { register, handleSubmit, errors, isLoading } = useRegisterForm(t);

  return (
    <section className="auth_section main_section mt-80">
      <div className="container">
        <div className="row">
          <div className="col-12 p-2 mb-2">
            <h3 className="section_title">{t("auth.registerTitle")}</h3>
            <p className="section_description">{t("auth.registerSubtitle")}</p>
          </div>

          <div className="col-lg-6 col-12 p-2">
            <form className="form_ui" onSubmit={handleSubmit}>
              <div className="form_group">
                <InputField
                  label={t("auth.firstName")}
                  placeholder={t("auth.firstName")}
                  {...register("first_name")}
                  error={errors.first_name?.message}
                />

                <InputField
                  label={t("auth.lastName")}
                  placeholder={t("auth.lastName")}
                  {...register("last_name")}
                  error={errors.last_name?.message}
                />
              </div>

              <div className="form_group">
                <InputField
                  label={t("auth.email")}
                  placeholder={t("auth.enterEmail")}
                  type="email"
                  {...register("email")}
                  error={errors.email?.message}
                />

                <InputField
                  type="tel"
                  label={t("auth.whatsapp")}
                  placeholder={t("auth.enterPhoneNumber")}
                  {...register("whatsapp")}
                  error={errors.whatsapp?.message}
                />
              </div>

              <div className="form_group">
                <SelectField
                  label={t("auth.country")}
                  defaultSelect={t("auth.selectCountry")}
                  options={countries?.map((country) => ({
                    name: country?.title,
                    value: country?.id,
                  }))}
                  {...register("country_id")}
                  error={errors.country_id?.message}
                />
              </div>

              <div className="form_group">
                <PasswordField
                  label={t("auth.password")}
                  placeholder={t("auth.enterPassword")}
                  {...register("password")}
                  error={errors.password?.message}
                />

                <PasswordField
                  label={t("auth.confirmPassword")}
                  placeholder={t("auth.confirmPassword")}
                  {...register("password_confirmation")}
                  error={errors.password_confirmation?.message}
                />
              </div>

              <Form.Check
                {...register("terms")}
                type="checkbox"
                isInvalid={!!errors.terms}
                label={
                  <>
                    {t("auth.acceptTerms")}{" "}
                    <Link to="/terms-conditions">
                      {t("auth.termsAndConditions")}
                    </Link>{" "}
                    *
                  </>
                }
              />

              <SubmitButton text={t("auth.signUp")} loading={isLoading} />

              <p className="note">
                {t("auth.alreadyHaveAnAccount")}{" "}
                <Link to="/signin">{t("auth.signIn")}</Link>
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
