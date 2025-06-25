import { useEffect, useState } from "react";
import { Form, Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import SubmitButton from "../forms/SubmitButton";
import SelectField from "../forms/SelectField";
import InputField from "../forms/InputField";
import useGetAddresses from "../../hooks/profile/useGetAddresses";
import useCreateOrder from "../../hooks/profile/useCreateOrder";

export default function OrderShipment({ show, setShow, consolidated }) {
  const { t } = useTranslation();
  const { data: addresses } = useGetAddresses();

  const [showAddressForm, setShowAddressForm] = useState(false);
  const [payload, setPayload] = useState({
    address_id: "",
    packages_id: [],
  });

  useEffect(() => {
    if (consolidated) {
      setPayload((prev) => ({
        ...prev,
        packages_id: consolidated.map((p) => Number(p.id)),
      }));
    }
  }, [consolidated]);

  const { createOrder, isPending } = useCreateOrder(t, setShow, payload);

  return (
    <Modal show={show} onHide={() => setShow(false)} centered>
      <Modal.Header closeButton className="pb-0">
        <Modal.Title>
          <h6>{t("orderModel.title")}</h6>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form
          className="form_ui"
          onSubmit={(e) => {
            e.preventDefault();
            createOrder();
          }}
        >
          <div className="row">
            <div className="col-12 p-2">
              <p>{t("orderModel.text")}</p>
            </div>

            <div className="col-12 p-2">
              <div className="select_destination">
                <SelectField
                  required={true}
                  label={t("orderModel.selectDestination")}
                  defaultSelect={t("orderModel.selectDestination")}
                  options={addresses?.map((address) => ({
                    name: address?.nickname,
                    value: address?.id,
                  }))}
                  value={payload.address_id}
                  onChange={(e) => {
                    setPayload((prev) => ({
                      ...prev,
                      address_id: e.target.value,
                    }));
                  }}
                />

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setShowAddressForm(!showAddressForm);
                  }}
                >
                  {t("orderModel.addDestination")}
                </button>
              </div>
            </div>

            {showAddressForm && (
              <>
                <div className="col-12 p-2">
                  <InputField
                    label="Add a nickname so you can better manage your addresses*"
                    placeholder="Enter nickname"
                  />
                </div>

                <div className="col-lg-6 col-12 p-2">
                  <InputField
                    label="Full Name*"
                    placeholder="Enter full name"
                  />
                </div>

                <div className="col-lg-6 col-12 p-2">
                  <InputField label="Phone*" placeholder="Enter phone number" />
                </div>

                <div className="col-lg-6 col-12 p-2">
                  <InputField
                    label="Address Line 1*"
                    placeholder="Enter address line 1"
                  />
                </div>

                <div className="col-lg-6 col-12 p-2">
                  <InputField
                    label="Address Line 2"
                    placeholder="Enter address line 2"
                  />
                </div>

                <div className="col-lg-6 col-12 p-2">
                  <SelectField
                    label="Country*"
                    defaultSelect="Select a country"
                    options={[
                      { value: "Saudi Arabia", name: "Saudi Arabia" },
                      { value: "Egypt", name: "Egypt" },
                      {
                        value: "United Arab Emirates",
                        name: "United Arab Emirates",
                      },
                      { value: "Kuwait", name: "Kuwait" },
                      { value: "Qatar", name: "Qatar" },
                    ]}
                  />
                </div>

                <div className="col-lg-6 col-12 p-2">
                  <InputField label="City*" placeholder="Enter city" />
                </div>
              </>
            )}

            <div className="col-12 p-2">
              <SubmitButton
                text={t("orderModel.orderShipment")}
                className="mt-2"
                loading={isPending}
              />
            </div>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
