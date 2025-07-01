import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputField from "../../ui/forms/InputField";
import SelectField from "../../ui/forms/SelectField";
import SubmitButton from "../../ui/forms/SubmitButton";
import useGetCountries from "../../hooks/settings/useGetCountries";

export default function CalcForm({ calculateShipping, isMore, setIsMore }) {
  const { t } = useTranslation();
  const { data: countries } = useGetCountries();

  const schema = yup.object().shape({
    weight: yup
      .number()
      .typeError(t("validation.required"))
      .required(t("validation.required"))
      .positive(t("validation.positive")),
    country: yup.string().required(t("validation.required")),
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
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      weight: "",
      city: "",
      country: "",
      length: "",
      width: "",
      height: "",
    },
  });

  const onSubmit = (data) => {
    calculateShipping(data);
  };

  return (
    <form className="calculator_form form_ui" onSubmit={handleSubmit(onSubmit)}>
      <div className="form_group">
        <InputField
          label={t("shippingCalculator.weight")}
          placeholder={t("shippingCalculator.enterWeight")}
          icon="fa-regular fa-weight-hanging"
          {...register("weight")}
          error={errors.weight?.message}
        />
      </div>

      <div className="form_group">
        <SelectField
          label={t("shippingCalculator.country")}
          icon="fa-regular fa-location-dot"
          defaultSelect={t("shippingCalculator.selectCountry")}
          {...register("country")}
          error={errors.country?.message}
          options={countries?.map((country) => ({
            name: country?.title,
            value: country?.id,
          }))}
        />

        <SelectField
          label={t("shippingCalculator.city")}
          icon="fa-regular fa-location-dot"
          defaultSelect={t("shippingCalculator.selectCity")}
          {...register("city")}
          disabled={!watch("country")}
          error={errors.city?.message}
          options={countries
            ?.find((c) => +c?.id === +watch("country"))
            ?.cities?.map((city) => ({
              name: city?.title,
              value: city?.id,
            }))}
        />
      </div>

      <p className="note">
        <i className="fa-regular fa-circle-info"></i> &nbsp;
        {t("shippingCalculator.note1")} <b>{t("shippingCalculator.vol")}</b>{" "}
        {t("shippingCalculator.note3")} , {t("shippingCalculator.note2")}
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
        <SubmitButton text={t("shippingCalculator.calculate")} />
      </div>

      <p className="contact_note">
        {t("shippingCalculator.note")}{" "}
        <Link to="/contact">{t("shippingCalculator.contactUs")}</Link> .
      </p>
    </form>
  );
}
