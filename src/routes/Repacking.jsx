import React from "react";
import { useTranslation } from "react-i18next";

export default function Repacking() {
  const { t } = useTranslation();

  return (
    <section className="repacking main_section">
      <div className="container">
        <div className="col-12 p-2">
          <h3 className="section_title">{t("repacking.title")}</h3>
          <p className="section_description">{t("repacking.description")}</p>
        </div>
        <div className="repacking__examples">
          <div className="repacking__example repacking__example--reverse">
            <div className="repacking__text">
              <p className="repacking__description">
                {t("repacking.itemDescription")}
              </p>
            </div>
            <img
              src="/images/repacking2.png"
              alt="Sneakers repacking"
              className="repacking__image"
            />
          </div>

          <h4 className="repacking__example-label">
            {t("repacking.exampleLabel")}{" "}
          </h4>

          <div className="repacking__example">
            <img
              src="../images/repacking.png"
              alt="iPhone repacking"
              className="repacking__image"
            />
            <div className="repacking__text">
              <h4 className="repacking__title">
                {t("repacking.exampleTitle")}{" "}
              </h4>
              <p className="repacking__description">
                {t("repacking.exampleDescription")}
              </p>
            </div>
          </div>
        </div>

        <div className="repacking__note">{t("repacking.note")}</div>

        <div className="repacking__pricing">
          <h3 className="repacking__pricing-title">
            {t("repacking.costTitle")}
          </h3>

          <div className="repacking__pricing-details">
            <div className="repacking__pricing-section">
              <h5 className="repacking__pricing-subtitle">
                {" "}
                {t("repacking.costSubtitle")}
              </h5>
              <div className="repacking__pricing-box">
                <p>{t("repacking.costDescription")}</p>
              </div>
            </div>

            <div className="repacking__pricing-section">
              <h5 className="repacking__pricing-subtitle">
                {t("repacking.careSubtitle")}
              </h5>
              <div className="repacking__pricing-box">
                <p>{t("repacking.careDescription")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="repacking__ship">
          <h4 className="repacking__ship-title">{t("repacking.shipTitle")}</h4>
          <p>{t("repacking.shipDescription")}</p>
        </div>
      </div>
    </section>
  );
}
