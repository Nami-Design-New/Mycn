import React from "react";
import PackageCard from "../ui/cards/PackageCard";
import { useTranslation } from "react-i18next";

const individualPackages = [
  { id: 1, image: "../images/2.webp", description: "Amazon - Electronics", price: 297 },
  { id: 2, image: "../images/4.webp", description: "eBay-Shoes", price: 208},
  { id: 3, image: "../images/6.webp", description: "AliExpress - Accessories", price: 306 },
];

const consolidatedPackage = [
  { id: 1, image: "../images/1.webp", description: "Amazon - Electronics", price: 90 },
  { id: 2, image: "../images/3.webp", description: "eBay-Shoes", price: 93 },
  { id: 3, image: "../images/5.webp", description: "AliExpress - Accessories", price: 131 },
];

export default function PackageConsolidation() {
  const { t } = useTranslation();

  return (
    <section className="package main_section">
      <div className="container">
        <div className="col-12 p-2">
          <h3 className="section_title">{t("package.title")}</h3>
          <p className="section_description">{t("package.description")}</p>
        </div>

        <div className="row gy-4">
          {individualPackages.map((pkg, index) => (
            <React.Fragment key={index}>
              <div className="col-12 col-lg-6">
                <div className="package-section">
                  <h5 className="section-title red">
                    <i className="fas fa-box-open"></i> {t("package.individual")}
                  </h5>
                  <PackageCard data={individualPackages[index]} />
                </div>
              </div>

              <div className="col-12 col-lg-6">
                <div className="package-section">
                  <h5 className="section-title green">
                    <i className="fas fa-boxes"></i> {t("package.consolidated")}
                  </h5>
                  <PackageCard data={consolidatedPackage[index]} />
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
