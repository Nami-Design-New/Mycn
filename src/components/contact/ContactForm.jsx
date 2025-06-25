import { useTranslation } from "react-i18next";
import InputField from "../../ui/forms/InputField";
import useGetSettings from "../../hooks/settings/useGetSettings";
import useContact from "../../hooks/settings/useContact";
import SubmitButton from "./../../ui/forms/SubmitButton";

export default function ContactForm() {
  const { t } = useTranslation();
  const { data: settings } = useGetSettings();
  const { register, handleSubmit, errors, isLoading } = useContact(t);

  return (
    <div className="row">
      <div className="col-12 p-2 mt-5 mb-3">
        <h4 className="title">{t("contact.title")}</h4>
        <p className="description">{t("contact.description")}</p>
      </div>

      <div className="col-lg-6 col-12 p-2">
        <form className="form_ui d-flex flex-column gap-3" onSubmit={handleSubmit}>
          <InputField
            label={t("contact.fullName")}
            placeholder={t("contact.enterFullName")}
            error={errors?.name?.message}
            {...register("name")}
          />

          <InputField
            label={t("contact.emailAddress")}
            placeholder={t("contact.enterEmailAddress")}
            type="email"
            error={errors?.email?.message}
            {...register("email")}
          />

          <InputField
            label={t("contact.subject")}
            placeholder={t("contact.enterSubject")}
            error={errors?.subject?.message}
            {...register("subject")}
          />

          <InputField
            as="textarea"
            label={t("contact.message")}
            placeholder={t("contact.enterMessage")}
            error={errors?.message?.message}
            {...register("message")}
          />

          <SubmitButton
            text={t("contact.send")}
            loading={isLoading}
            className="submit_btn mt-2"
          />
        </form>
      </div>

      <div className="col-lg-6 col-12 p-2">
        <div className="map">
          <iframe
            src={`https://www.google.com/maps?q=${settings?.latitude},${settings?.longitude}&hl=ar&z=14&output=embed`}
            width="100%"
            height="100%"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
