import { useEffect } from "react";
import { Modal, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import InputField from "../../ui/forms/InputField";
import SelectField from "../../ui/forms/SelectField";
import SubmitButton from "../forms/SubmitButton";
import useGetCountries from "../../hooks/settings/useGetCountries";
import useAddEditAddress from "../../hooks/profile/useAddEditAddress";

export default function AddressModal({
  show,
  setShow,
  addressToEdit,
  setAddressToEdit,
}) {
  const { t } = useTranslation();
  const { data: countries } = useGetCountries();
  const cities = countries?.flatMap((c) => c.cities) || [];

  const { register, handleSubmit, reset, errors, isLoading } =
    useAddEditAddress(t, addressToEdit?.id, () => {
      setShow(false);
      setAddressToEdit(null);
    });

  useEffect(() => {
    if (show) {
      if (addressToEdit) {
        reset({
          nickname: addressToEdit?.nickname || "",
          full_name: addressToEdit?.full_name || "",
          phone: addressToEdit?.phone || "",
          address_1: addressToEdit?.address_1 || "",
          address_2: addressToEdit?.address_2 || "",
          country_id: addressToEdit?.country?.id || "",
          city_id: addressToEdit?.city?.id || "",
        });
      } else {
        reset({
          nickname: "",
          full_name: "",
          phone: "",
          address_1: "",
          address_2: "",
          country_id: "",
          city_id: "",
        });
      }
    }
  }, [show, addressToEdit, reset]);

  return (
    <Modal show={show} onHide={() => setShow(false)} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>
          {addressToEdit?.id
            ? t("address_modal.edit")
            : t("address_modal.addNew")}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form className="form_ui" onSubmit={handleSubmit}>
          <Form.Text className="text-muted mb-3 d-block">
            {t("address_modal.text")}
          </Form.Text>
          <div className="row">
            <div className="col-12 p-2">
              <InputField
                label={t("address_modal.nickName")}
                placeholder={t("address_modal.enterNickName")}
                error={errors?.nickname?.message}
                {...register("nickname")}
              />
            </div>
            <div className="col-lg-6 col-12 p-2">
              <InputField
                label={t("address_modal.fullName")}
                placeholder={t("address_modal.enterFullName")}
                error={errors?.full_name?.message}
                {...register("full_name")}
              />
            </div>
            <div className="col-lg-6 col-12 p-2">
              <InputField
                label={t("address_modal.phone")}
                placeholder={t("address_modal.enterPhone")}
                error={errors?.phone?.message}
                {...register("phone")}
              />
            </div>
            <div className="col-lg-6 col-12 p-2">
              <InputField
                label={t("address_modal.addressLine1")}
                placeholder={t("address_modal.enterAddressLine1")}
                error={errors?.address_1?.message}
                {...register("address_1")}
              />
            </div>
            <div className="col-lg-6 col-12 p-2">
              <InputField
                label={t("address_modal.addressLine2")}
                placeholder={t("address_modal.enterAddressLine2")}
                error={errors?.address_2?.message}
                {...register("address_2")}
              />
            </div>
            <div className="col-lg-6 col-12 p-2">
              <SelectField
                label={t("address_modal.country")}
                defaultSelect={t("address_modal.selectCountry")}
                options={countries?.map((c) => ({
                  value: c.id,
                  name: c.title,
                }))}
                error={errors?.country_id?.message}
                {...register("country_id")}
              />
            </div>
            <div className="col-lg-6 col-12 p-2">
              <SelectField
                label={t("address_modal.city")}
                defaultSelect={t("address_modal.selectCity")}
                options={cities.map((c) => ({ value: c.id, name: c.title }))}
                error={errors?.city_id?.message}
                {...register("city_id")}
              />
            </div>
            <div className="col-12 p-2">
              <SubmitButton
                text={
                  addressToEdit?.id
                    ? t("address_modal.edit")
                    : t("address_modal.add")
                }
                loading={isLoading}
              />
            </div>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
