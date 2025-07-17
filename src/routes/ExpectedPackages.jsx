import { useTranslation } from "react-i18next";
import InputField from "./../ui/forms/InputField";

export default function ExpectedPackages() {
  const { t } = useTranslation();
  return (
    <div className="p-2">
      <form className="form_ui expected-packages">
        <div className="form_group">
          <InputField label={t("common.trackingNumber")}  />
          <InputField label={t("common.weight")} />
        </div>

        <div className="form_group">
          <InputField label={t("common.size")} />
          <InputField label={t("common.source")} />
        </div>

        <label htmlFor="image" className="image_field">
          <input type="file" name="image" id="image" />
          <h6>
            <i className="fa-regular fa-image"></i> {t("common.uploadImage")}
          </h6>
        </label>
      </form>
    </div>
  );
}
