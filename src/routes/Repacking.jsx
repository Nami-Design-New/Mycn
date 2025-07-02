import { useTranslation } from "react-i18next";
import useRepackaging from "./../hooks/settings/useRepackaging";

export default function Repacking() {
  const { t } = useTranslation();
  const { data: repackaging } = useRepackaging();

  return (
    <section className="repacking main_section mt-80">
      <div className="container">
        <div className="col-12 p-2">
          <h3 className="section_title">
            {repackaging?.mainRepackingPage?.title}
          </h3>
          <p className="section_description">
            {repackaging?.mainRepackingPage?.subtitle}
          </p>
        </div>
        <div className="repacking__examples">
          <div className="repacking__example repacking__example--reverse">
            <div className="repacking__text">
              <p className="repacking__description">
                {t("repacking.itemDescription")}
              </p>
            </div>
            <img
              src={repackaging?.mainRepackingPage?.image}
              alt="Sneakers repacking"
              className="repacking__image"
            />
          </div>

          <h4 className="repacking__example-label">
            {t("repacking.exampleLabel")}
          </h4>

          <div className="repacking__example">
            <img
              src={repackaging?.mainRepackingPage?.ex_image}
              alt="iPhone repacking"
              className="repacking__image"
            />
            <div className="repacking__text">
              <h4 className="repacking__title">
                {repackaging?.mainRepackingPage?.ex_title}
              </h4>
              <p className="repacking__description">
                {repackaging?.mainRepackingPage?.ex_desc}
              </p>
            </div>
          </div>
        </div>

        <div className="repacking__note">{t("repacking.note")}</div>

        <div className="repacking__pricing">
          <h3 className="repacking__pricing-title">
            {repackaging?.mainRepackingPage?.title2}
          </h3>

          <div className="repacking__pricing-details">
            {repackaging?.repackingFeatures?.map((item, index) => (
              <div className="repacking__pricing-section" key={index}>
                <h5 className="repacking__pricing-subtitle">{item.title}</h5>
                <div className="repacking__pricing-box">
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
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
