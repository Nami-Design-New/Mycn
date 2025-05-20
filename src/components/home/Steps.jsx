import React from "react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

export default function Steps() {
  const { t } = useTranslation();

  return (
    <section className="steps-section">
      <div className="container">
        <div className="col-12 p-2 mb-3">
          <h6 className="section_hint">{t("steps.hint")}</h6>
          <h3 className="section_title">{t("steps.title")}</h3>
        </div>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="step-item">
              <img src="/images/img1.png" alt={t("steps.step1.alt")} className="step-img" />
              <h4>{t("steps.step1.title")}</h4>
              <Link className="highlight" to="/signup">
                {t("steps.step1.link")}
              </Link>
              <p>{t("steps.step1.description")}</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="step-item">
              <img src="/images/img2.jpg" alt={t("steps.step2.alt")} className="step-img" />
              <h4>{t("steps.step2.title")}</h4>
              <p>{t("steps.step2.description")}</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="step-item">
              <img src="/images/img3.jpg" alt={t("steps.step3.alt")} className="step-img" />
              <h4>{t("steps.step3.title")}</h4>
              <p>{t("steps.step3.description")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
