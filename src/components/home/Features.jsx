import { useTranslation } from "react-i18next";

export default function Features({ features }) {
  const { t } = useTranslation("");

  return (
    <section className="features_section">
      <div className="container">
        <div className="row">
          <div className="col-12 p-2 mb-3">
            <h6 className="section_hint">{t("features.subtitle")}</h6>
            <h3 className="section_title">
              {t("features.title")}{" "}
              <span>{t("features.transportationBusiness")}</span>
            </h3>
          </div>
          {features?.map((feature) => (
            <div className="col-lg-3 col-md-6 col-12 p-2" key={feature.id}>
              <div className="feature_card">
                <div className="icon">
                  <img src={feature.icon} alt="feature" />
                </div>
                <div className="content">
                  <h3 className="title">{feature.title}</h3>
                  <p className="description">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
