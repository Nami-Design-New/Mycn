import { Modal, Form } from "react-bootstrap";
import InputField from "./../../ui/forms/InputField";
import SelectField from "./../../ui/forms/SelectField";
import SubmitButton from "./../forms/SubmitButton";

export default function AddressModal({
  show,
  handleClose,
  editData,
  isAdding,
}) {
  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>
          {isAdding ? "Add New Address" : "Edit Address"}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form className="form_ui">
          <Form.Text className="text-muted mb-3 d-block">
            First and last name must match the government-issued ID of the
            person receiving the shipment.
          </Form.Text>

          <div className="row">
            <div className="col-12 p-2">
              <InputField
                label="Add a nickname so you can better manage your addresses*"
                placeholder="Enter nickname"
              />
            </div>

            <div className="col-lg-6 col-12 p-2">
              <InputField label="Full Name*" placeholder="Enter full name" />
            </div>

            <div className="col-lg-6 col-12 p-2">
              <InputField
                label="Phone*"
                value={editData.phone}
                placeholder="Enter phone number"
              />
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
                value={editData.addressLine2}
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

            <div className="col-12 p-2">
              <SubmitButton
                text={isAdding ? "Add Address" : "Update Address"}
                className="mt-2"
              />
            </div>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
