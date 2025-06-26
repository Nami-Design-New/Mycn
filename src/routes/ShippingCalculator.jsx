import { useState } from "react";
import { Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import InputField from "../ui/forms/InputField";
import SelectField from "../ui/forms/SelectField";
import SubmitButton from "../ui/forms/SubmitButton";
import Faqs from "../ui/layout/Faqs";

export default function ShippingCalculator() {
  const { t } = useTranslation();
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
                <div className="transportation_type">
                  <label htmlFor="air_freight">
                    <input
                      type="radio"
                      name="transportation_type"
                      id="air_freight"
                      value="air_freight"
                    />

                    <span>
                      <i className="fa-regular fa-plane-up"></i> Air Freight
                    </span>
                  </label>

                  <label htmlFor="sea_freight">
                    <input
                      type="radio"
                      name="transportation_type"
                      id="sea_freight"
                      value="sea_freight"
                    />
                    <span>
                      <i className="fa-regular fa-ship"></i> Sea freight
                    </span>
                  </label>
                </div>

                <div className="form_group">
                  <InputField
                    label="Weight"
                    placeholder="Enter weight"
                    icon="fa-regular fa-weight-hanging"
                  />

                  <SelectField
                    label="Unit"
                    defaultSelect="Select unit"
                    options={[
                      { name: "Kg", value: "kg" },
                      { name: "Lbs", value: "lbs" },
                    ]}
                  />
                </div>

                <div className="form_group">
                  <InputField
                    label="City"
                    icon="fa-regular fa-location-dot"
                    placeholder="Enter your city"
                  />

                  <SelectField
                    label="Currency"
                    icon="fa-solid fa-dollar-sign"
                    defaultSelect="Select currency"
                    options={[
                      { name: "US Dollar (USD)", value: "USD" },
                      { name: "Euro (EUR)", value: "EUR" },
                      { name: "British Pound (GBP)", value: "GBP" },
                      { name: "Japanese Yen (JPY)", value: "JPY" },
                      { name: "Saudi Riyal (SAR)", value: "SAR" },
                      { name: "UAE Dirham (AED)", value: "AED" },
                      { name: "Egyptian Pound (EGP)", value: "EGP" },
                    ]}
                  />
                </div>

                <p className="note">
                  <i className=" fa-regular fa-circle-info"></i> &nbsp; If the
                  sum of <b>(length * width * height)</b> exceeds 130 cm ,
                  please enter the dimensions to calculate the price accurately.
                </p>

                <Form.Check
                  type="switch"
                  label="Is the size larger than 130cm?"
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
                    <SelectField
                      label="Unit"
                      defaultSelect="Select unit"
                      options={[
                        { name: "Cm", value: "cm" },
                        { name: "Inch", value: "inch" },
                      ]}
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
                  <strong>5 to 10 business days</strong>
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
