import React from "react";
import { useTranslation } from "react-i18next";
import PackageCard from "../ui/cards/PackageCard";
import useConsilidation from "./../hooks/settings/useConsilidation";

export default function PackageConsolidation() {
  const { t } = useTranslation();
  const { data: concilidation } = useConsilidation();

  const details = concilidation?.packageConsolidationDetail || [];

  return (
    <section className="package main_section mt-80">
      <div className="container">
        <div className="col-12 p-2">
          <h3 className="section_title">{t("package.title")}</h3>
          <p className="section_description">{t("package.description")}</p>
        </div>

        <div className="row">
          {details.map((_, i) => {
            if (i % 2 !== 0) return null;

            const individual = details[i];
            const consolidated = details[i + 1];

            return (
              <React.Fragment key={i}>
                {/* Individual */}
                <div className="col-12 col-lg-6 p-2">
                  <div className="package-section">
                    <h5 className="section-title red">
                      <i className="fas fa-box-open"></i>{" "}
                      {t("package.individual")}
                    </h5>
                    <PackageCard data={individual} />
                  </div>
                </div>

                {/* Consolidated */}
                <div className="col-12 col-lg-6 p-2">
                  <div className="package-section">
                    <h5 className="section-title green">
                      <i className="fas fa-boxes"></i>{" "}
                      {t("package.consolidated")}
                    </h5>
                    <PackageCard data={consolidated} />
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
