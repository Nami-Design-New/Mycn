import { useTranslation } from "react-i18next";
import useGetSettings from "../hooks/settings/useGetSettings";

export default function Privacy() {
  const { t } = useTranslation();
  const { data: settings } = useGetSettings();

  return (
    <section className="main_section terms  mt-80">
      <div className="container">
        <div className="row">
          <div className="col-12 p-2 mb-3">
            <h3 className="section_title">{t("common.privacyTitle")}</h3>
            <p className="section_description">
              {t("common.privacyDescription")}
            </p>
          </div>

          <div
            className="col-12 p-2"
            dangerouslySetInnerHTML={{ __html: settings?.privacy_policy }}
          />
        </div>
      </div>
    </section>
  );
}
