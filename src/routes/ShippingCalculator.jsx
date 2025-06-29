import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form, Spinner } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import * as yup from "yup";
import useGetCities from "../hooks/settings/useGetCities";
import InputField from "../ui/forms/InputField";
import SelectField from "../ui/forms/SelectField";
import SubmitButton from "../ui/forms/SubmitButton";
import Faqs from "../ui/layout/Faqs";
import useShippingCalculator from "../hooks/useShippingCalculator";

export default function ShippingCalculator() {
  const { t } = useTranslation();
  const { data: cities } = useGetCities();

  const {
    isMore,
    setIsMore,
    result,
    loading,
    calculateShipping,
  } = useShippingCalculator(cities || []);

  const schema = yup.object().shape({
    weight: yup
      .number()
      .typeError(t("validation.required"))
      .required(t("validation.required"))
      .positive(t("validation.positive")),
    city: yup.string().required(t("validation.required")),
    ...(isMore && {
      length: yup
        .number()
        .typeError(t("validation.required"))
        .required(t("validation.required"))
        .positive(t("validation.positive")),
      width: yup
        .number()
        .typeError(t("validation.required"))
        .required(t("validation.required"))
        .positive(t("validation.positive")),
      height: yup
        .number()
        .typeError(t("validation.required"))
        .required(t("validation.required"))
        .positive(t("validation.positive")),
    }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      weight: "",
      city: "",
      length: "",
      width: "",
      height: "",
    },
  });

  const onSubmit = (data) => {
    calculateShipping(data);
  };

  return (
    <>
      <section className="shipping_calculator main_section mt-80">
        <div className="container">
          <div className="row">
            <div className="col-12 p-2">
              <h3 className="section_title">{t("shippingCalculator.title")}</h3>
              <p className="section_description">{t("shippingCalculator.subtitle")}</p>
            </div>

            <div className="col-lg-8 col-12 p-2">
              <form className="calculator_form form_ui" onSubmit={handleSubmit(onSubmit)}>
                <div className="form_group">
                  <InputField
                    label="Weight"
                    placeholder="Enter weight"
                    icon="fa-regular fa-weight-hanging"
                    {...register("weight")}
                    error={errors.weight?.message}
                  />

                  <SelectField
                    label="City"
                    icon="fa-regular fa-location-dot"
                    defaultSelect={t("shippingCalculator.selectCity")}
                    {...register("city")}
                    error={errors.city?.message}
                    options={cities?.map((city) => ({
                      name: city?.title,
                      value: city?.id,
                    }))}
                  />
                </div>

                <p className="note">
                  <i className="fa-regular fa-circle-info"></i> &nbsp;
                  {t("shippingCalculator.note1")}{" "}
                  <b>{t("shippingCalculator.vol")}</b>{" "}
                  {t("shippingCalculator.note3")} ,{" "}
                  {t("shippingCalculator.note2")}
                </p>

                <Form.Check
                  type="switch"
                  label={t("shippingCalculator.more")}
                  onChange={() => setIsMore((prev) => !prev)}
                  checked={isMore}
                />

                {isMore && (
                  <div className="form_group">
                    <InputField
                      type="number"
                      label="Length"
                      placeholder="00"
                      icon="fa-sharp-duotone fa-regular fa-arrow-up-right-and-arrow-down-left-from-center"
                      {...register("length")}
                      error={errors.length?.message}
                    />
                    <InputField
                      type="number"
                      label="Width"
                      placeholder="00"
                      icon="fa-sharp-duotone fa-regular fa-arrows-left-right"
                      {...register("width")}
                      error={errors.width?.message}
                    />
                    <InputField
                      type="number"
                      label="Height"
                      placeholder="00"
                      icon="fa-sharp-duotone fa-regular fa-arrows-up-down"
                      {...register("height")}
                      error={errors.height?.message}
                    />
                  </div>
                )}

                <div className="d-flex w-100 justify-content-end">
                  <SubmitButton
                    text={
                      loading ? (
                        <>
                          <Spinner animation="border" size="sm" className="me-2" />
                          {t("shippingCalculator.calculating")}
                        </>
                      ) : (
                        t("shippingCalculator.calculate")
                      )
                    }
                    loading={loading}
                  />
                </div>

                <p className="contact_note">
                  {t("shippingCalculator.note")}{" "}
                  <Link to="/contact">{t("shippingCalculator.contactUs")}</Link> .
                </p>
              </form>
            </div>

            <div className="col-lg-4 p-2">
              {result && (
                <div className="estimated_cost">
                  <h5>{t("shippingCalculator.estimatedCost")}</h5>
                  <p>
                    {t("shippingCalculator.startsFrom")}: <strong>${result}</strong>
                  </p>
                  <p>
                    {t("shippingCalculator.deliveryTime")}:{" "}
                    <strong>{t("shippingCalculator.days")}</strong>
                  </p>
                  <button className="btn">{t("shippingCalculator.shipNow")}</button>
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
