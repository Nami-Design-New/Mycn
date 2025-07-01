import { useTranslation } from "react-i18next";
import useGetCities from "../hooks/settings/useGetCities";
import Faqs from "../ui/layout/Faqs";
import useShippingCalculator from "../hooks/useShippingCalculator";
import CalcForm from "../components/shipping-calc/CalcForm";

export default function ShippingCalculator() {
  const { t } = useTranslation();
  const { data: cities } = useGetCities();

  const { isMore, setIsMore, result, calculateShipping } =
    useShippingCalculator(cities || []);

  return (
    <>
      <section className="shipping_calculator main_section mt-80">
        <div className="container">
          <div className="row">
            <div className="col-12 p-2">
              <h3 className="section_title">{t("shippingCalculator.title")}</h3>
              <p className="section_description">
                {t("shippingCalculator.subtitle")}
              </p>
            </div>

            <div className="col-lg-8 col-12 p-2">
              <CalcForm
                calculateShipping={calculateShipping}
                isMore={isMore}
                setIsMore={setIsMore}
              />
            </div>

            <div className="col-lg-4 p-2">
              {result && (
                <div className="estimated_cost">
                  <h5>{t("shippingCalculator.estimatedCost")}</h5>
                  <p>
                    {t("shippingCalculator.startsFrom")}:{" "}
                    <strong>USD {result}</strong>
                  </p>
                  <p>
                    {t("shippingCalculator.deliveryTime")}:{" "}
                    <strong>{t("shippingCalculator.days")}</strong>
                  </p>
                  <button className="btn">
                    {t("shippingCalculator.shipNow")}
                  </button>
                </div>
              )}

              <div className="content mt-3">
                <h6>{t("shippingCalculator.instructionsTitle")}</h6>
                <ul>
                  {t("shippingCalculator.instructions", {
                    returnObjects: true,
                  }).map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Faqs />
    </>
  );
}
