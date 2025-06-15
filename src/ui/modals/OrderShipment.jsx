import { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import SubmitButton from "../forms/SubmitButton";
import SelectField from "../forms/SelectField";
import InputField from "../forms/InputField";

export default function OrderShipment({ show, setShow }) {
  const [showAddressForm, setShowAddressForm] = useState(false);
  return (
    <Modal show={show} onHide={() => setShow(false)} centered size="lg">
      <Modal.Header closeButton className="pb-0">
        <Modal.Title>
          <h6>You&apos;re almost ready to ship!</h6>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form className="form_ui">
          <div className="row">
            <div className="col-12 p-2">
              <p>
                Simply select your desired destination, choose the shipment type
                that best suits your needs, and confirm your payment. Once
                completed, sit back and track your package as it makes its way
                to its destination.
              </p>
            </div>

            <div className="col-lg-6 col-12 p-2">
              <SelectField
                label="Select Shipment Type"
                defaultSelect={"Select Shipment Type"}
                options={[
                  { name: "Air Freight", value: "air_freight" },
                  { name: "Sea freight", value: "sea_freight" },
                ]}
              />
            </div>

            <div className="col-lg-6 col-12 p-2">
              <div className="select_destination">
                <SelectField
                  label="Select Destination"
                  defaultSelect={"Select Destination"}
                  options={[
                    { name: "Home", value: "home" },
                    { name: "Business", value: "business" },
                  ]}
                />

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setShowAddressForm(!showAddressForm);
                  }}
                >
                  Add Destination
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
              <div className="shp_info">
                <div className="d-flex align-items-center gap-5">
                  <h6>
                    Total Weight: <span>1.5kg</span>
                  </h6>
                  <h6>
                    Final Dimensions: <span>30 x 20 x 10 cm <sup>3</sup></span>
                  </h6>
                </div>

                <h6>
                  Total Price <span>100$</span>
                </h6>
              </div>
            </div>

            <div className="col-12 p-2">
              <SubmitButton text={"Confirm Shipment"} className="mt-2" />
            </div>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
