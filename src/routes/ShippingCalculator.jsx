import { useState } from "react";
import { Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import InputField from "../ui/forms/InputField";
import SelectField from "../ui/forms/SelectField";
import SubmitButton from "../ui/forms/SubmitButton";
import Faqs from "../ui/layout/Faqs";
import useGetCities from "../hooks/settings/useGetCities";

export default function ShippingCalculator() {
  const { t } = useTranslation();
  const { data: cities } = useGetCities();
  const [isMore, setIsMore] = useState(false);

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
              <form className="calculator_form form_ui">
                <div className="form_group">
                  <InputField
                    label="Weight"
                    placeholder="Enter weight"
                    icon="fa-regular fa-weight-hanging"
                  />

                  <SelectField
                    label="City"
                    icon="fa-regular fa-location-dot"
                    defaultSelect={t("shippingCalculator.selectCity")}
                    options={cities?.map((city) => ({
                      name: city?.title,
                      value: city?.id,
                    }))}
                  />
                </div>

                <p className="note">
                  <i className=" fa-regular fa-circle-info"></i> &nbsp;
                  {t("shippingCalculator.note1")}{" "}
                  <b>{t("shippingCalculator.vol")}</b>{" "}
                  {t("shippingCalculator.note3")} ,
                  {t("shippingCalculator.note2")}
                </p>

                <Form.Check
                  type="switch"
                  label={t("shippingCalculator.more")}
                  onChange={() => setIsMore(!isMore)}
                  checked={isMore}
                />

                {isMore && (
                  <div className="form_group">
                    <InputField
                      type="number"
                      label="Length"
                      placeholder="00"
                      icon={
                        "fa-sharp-duotone fa-regular fa-arrow-up-right-and-arrow-down-left-from-center"
                      }
                    />
                    <InputField
                      type="number"
                      label="Width"
                      placeholder="00"
                      icon={"fa-sharp-duotone fa-regular fa-arrows-left-right"}
                    />
                    <InputField
                      type="number"
                      label="Height"
                      placeholder="00"
                      icon={"fa-sharp-duotone fa-regular fa-arrows-up-down"}
                    />
                  </div>
                )}

                <div className="d-flex w-100 justify-content-end">
                  <SubmitButton text={t("shippingCalculator.calculate")} />
                </div>

                <p className="contact_note">
                  {t("shippingCalculator.note")}{" "}
                  <Link to="/contact">{t("shippingCalculator.contactUs")}</Link>{" "}
                  .
                </p>
              </form>
            </div>

            <div className="col-lg-4 p-2">
              <div className="estimated_cost">
                <h5>{t("shippingCalculator.estimatedCost")}</h5>
                <p>
                  {t("shippingCalculator.startsFrom")}: <strong>$12.99</strong>
                </p>
                <p>
                  {t("shippingCalculator.deliveryTime")}:{" "}
                  <strong>{t("shippingCalculator.days")}</strong>
                </p>
                <button className="btn">
                  {t("shippingCalculator.shipNow")}
                </button>
              </div>

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
