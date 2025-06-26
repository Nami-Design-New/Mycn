import { Form } from "react-bootstrap";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import InputField from "../../ui/forms/InputField";
import SelectField from "../../ui/forms/SelectField";
import SubmitButton from "../../ui/forms/SubmitButton";
import PasswordField from "../../ui/forms/PasswordField";
import useGetCountries from "../../hooks/settings/useGetCountries";

export default function RegisterStep1({
  register,
  handleSubmit,
  errors,
  isLoading,
}) {
  const { t } = useTranslation();
  const { data: countries, isLoading: isCountriesLoading } = useGetCountries();

  return (
    <form className="form_ui mt-3" onSubmit={handleSubmit}>
      <div className="form_group">
        <InputField
          label={t("auth.firstName")}
          placeholder={t("auth.firstName")}
          {...register("first_name")}
          error={errors.first_name?.message}
          autoComplete="given-name"
        />
        <InputField
          label={t("auth.lastName")}
          placeholder={t("auth.lastName")}
          {...register("last_name")}
          error={errors.last_name?.message}
          autoComplete="family-name"
        />
      </div>

      <div className="form_group">
        <InputField
          label={t("auth.email")}
          placeholder={t("auth.enterEmail")}
          type="email"
          {...register("email")}
          error={errors.email?.message}
          autoComplete="email"
        />
        <InputField
          type="tel"
          label={t("auth.whatsapp")}
          placeholder={t("auth.enterPhoneNumber")}
          {...register("whatsapp")}
          error={errors.whatsapp?.message}
          autoComplete="tel"
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
          isLoading={isCountriesLoading}
        />
      </div>

      <div className="form_group">
        <PasswordField
          label={t("auth.password")}
          placeholder={t("auth.enterPassword")}
          {...register("password")}
          error={errors.password?.message}
          autoComplete="new-password"
        />
        <PasswordField
          label={t("auth.confirmPassword")}
          placeholder={t("auth.confirmPassword")}
          {...register("password_confirmation")}
          error={errors.password_confirmation?.message}
          autoComplete="new-password"
        />
      </div>

      <Form.Check
        {...register("terms")}
        type="checkbox"
        id="terms-checkbox"
        isInvalid={!!errors.terms}
        label={
          <>
            {t("auth.acceptTerms")}{" "}
            <Link to="/terms-conditions">{t("auth.termsAndConditions")}</Link> *
          </>
        }
      />

      <SubmitButton
        text={t("auth.signUp")}
        loading={isLoading}
        disabled={isLoading}
      />

      <p className="note mt-3">
        {t("auth.alreadyHaveAnAccount")}{" "}
        <Link to="/signin">{t("auth.signIn")}</Link>
      </p>
    </form>
  );
}
