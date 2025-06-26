import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Form, Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import SubmitButton from "../forms/SubmitButton";
import SelectField from "../forms/SelectField";
import useGetAddresses from "../../hooks/profile/useGetAddresses";
import useCreateOrder from "../../hooks/profile/useCreateOrder";

export default function OrderShipment({ show, setShow, consolidated }) {
  const { t } = useTranslation();
  const { data: addresses } = useGetAddresses();

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

                <Link to={"/profile/my-addresses"}>
                  {t("orderModel.addDestination")}
                </Link>
              </div>
            </div>

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
