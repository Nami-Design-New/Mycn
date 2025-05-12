import { useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router";
import InputField from "../ui/forms/InputField";
import SelectField from "./../ui/forms/SelectField";
import SubmitButton from "./../ui/forms/SubmitButton";
import Faqs from "../ui/layout/Faqs";

export default function ShippingCalculator() {
  const [isMore, setIsMore] = useState(false);

  return (
    <>
      <section className="shipping_calculator main_section">
        <div className="container">
          <div className="row">
            <div className="col-12 p-2">
              <h3 className="section_title">Shipping Cost Calculator</h3>
              <p className="section_description">
                Quickly estimate your shipping fees based on destination,
                weight, and delivery preferences.
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
                  <SubmitButton text="Estimate Cost" />
                </div>

                <p className="contact_note">
                  If you would like to ship a full container, please{" "}
                  <Link to="/contact"> contact us</Link> .
                </p>
              </form>
            </div>

            <div className="col-lg-4 p-2">
              <div className="estimated_cost">
                <h5>Estimated Shipping Cost</h5>
                <p>
                  Starting from <strong>$12.99</strong>
                </p>
                <p>
                  Delivery time: <strong>5 to 10 business days</strong>
                </p>
                <button className="btn">Ship Now</button>
              </div>

              <div className="content mt-3">
                <h6>Estimate your shipping rates</h6>
                <ul>
                  <li>
                    Enter your packages weight and dimensions to get an
                    estimated shipping cost and check carrier availability in
                    your region.
                  </li>
                  <li>
                    Keep in mind that any changes to weight, size, declared
                    value, or item classification may affect your final shipping
                    quote.
                  </li>
                  <li>
                    Shipping costs may vary depending on the selected shipping
                    method, destination country, and applicable customs or
                    duties.
                  </li>
                  <li>
                    Make sure your package details are accurate to avoid delays
                    or additional fees.
                  </li>
                  <li>
                    Estimated delivery times and shipping rates are provided by
                    carriers and may be subject to change due to external
                    factors.
                  </li>
                  <li>
                    For high-value or fragile items, consider adding insurance
                    or opting for a premium shipping service.
                  </li>
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
