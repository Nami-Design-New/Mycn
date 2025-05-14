import React from "react";
import { useTranslation } from "react-i18next";

export default function Restricted() {
  const { t } = useTranslation();

  return (
    <>
      <section className="restricted main_section">
        <div className="container">
          <div className="restricted__header">
            <h3 className="section_title">{t("restricted.title")}</h3>
            <p className="section_description">
              {t("restricted.description")}
            </p>
          </div>

          <div className="restricted__items">
            <div className="restricted__item">
              <img src="../icons/restricted2.svg" alt={t("restricted.hazmatAlt")} />
              <div className="restricted__text">
                <h4>{t("restricted.hazmatTitle")}</h4>
                <p>{t("restricted.hazmatDescription")}</p>
              </div>
            </div>

            <div className="restricted__item">
              <img src="../icons/restricted1.svg" alt={t("restricted.fragileAlt")} />
              <div className="restricted__text">
                <h4>{t("restricted.fragileTitle")}</h4>
                <p>{t("restricted.fragileDescription")}</p>
              </div>
            </div>

            <div className="restricted__item">
              <img src="../icons/restricted3.svg" alt={t("restricted.prohibitedAlt")} />
              <div className="restricted__text">
                <h4>{t("restricted.prohibitedTitle")}</h4>
                <p>{t("restricted.prohibitedDescription")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="restricted__benefits">
            <h4>{t("restricted.hazardousMaterialsTitle")}</h4>
            <p>{t("restricted.hazardousMaterialsDescription")}</p>
            <ol>
              <li>{t("restricted.hazardousStep1")}</li>
              <li>{t("restricted.hazardousStep2")}</li>
              <li>{t("restricted.hazardousStep3")}</li>
            </ol>
            <p>
              {t("restricted.contactSupport")}
              <a href="mailto:support@example.com">support@example.com</a>
            </p>
          </div>

          <div className="restricted__note">
            ⚠️ {t("restricted.contactNote")}
          </div>
      </section>
    </>
  );
}
