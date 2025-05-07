import { useTranslation } from "react-i18next";

export default function Features() {
  const { t } = useTranslation("");

  return (
    <section className="features_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12 p-2">
            <div className="feature_card">
              <div className="icon">
                <img src="/icons/shopping.svg" alt="feature" />
              </div>
              <div className="content">
                <h3 className="title">{t("features.title1")}</h3>
                <p className="description">{t("features.description1")}</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 p-2">
            <div className="feature_card">
              <div className="icon">
                <img src="/icons/layers.svg" alt="feature" />
              </div>
              <div className="content">
                <h3 className="title">{t("features.title2")}</h3>
                <p className="description">{t("features.description2")}</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 p-2">
            <div className="feature_card">
              <div className="icon">
                <img src="/icons/tracking.svg" alt="feature" />
              </div>
              <div className="content">
                <h3 className="title">{t("features.title3")}</h3>
                <p className="description">{t("features.description3")}</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 p-2">
            <div className="feature_card">
              <div className="icon">
                <img src="/icons/support.svg" alt="feature" />
              </div>
              <div className="content">
                <h3 className="title">{t("features.title4")}</h3>
                <p className="description">{t("features.description4")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
