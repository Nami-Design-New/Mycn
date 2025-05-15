import { Modal, Button, Form } from "react-bootstrap";
import InputField from "./../../ui/forms/InputField";
import CheckField from "./../../ui/forms/CheckField";
import SelectField from "./../../ui/forms/SelectField";

export default function AddressModal({
  show,
  handleClose,
  handleSave,
  editData,
  setEditData,
  isAdding,
}) {
  if (!editData) return null;

  return (
    <Modal show={show} onHide={handleClose} centered>
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
            <div className="col-md-6">
              <InputField
                label="First Name*"
                value={editData.firstName}
                onChange={(e) =>
                  setEditData({ ...editData, firstName: e.target.value })
                }
                placeholder="Enter first name"
              />
            </div>
            <div className="col-md-6">
              <InputField
                label="Last Name*"
                value={editData.lastName}
                onChange={(e) =>
                  setEditData({ ...editData, lastName: e.target.value })
                }
                placeholder="Enter last name"
              />
            </div>
          </div>

          <CheckField
            id="business-address"
            label="This is a business address"
            checked={editData.isBusiness || false}
            onChange={(e) =>
              setEditData({ ...editData, isBusiness: e.target.checked })
            }
          />
          <InputField
            label="Phone*"
            value={editData.phone}
            onChange={(e) =>
              setEditData({ ...editData, phone: e.target.value })
            }
            placeholder="Enter phone number"
          />

          <InputField
            label="Address Line 1*"
            value={editData.addressLine1}
            onChange={(e) =>
              setEditData({ ...editData, addressLine1: e.target.value })
            }
            placeholder="Enter address line 1"
          />

          <InputField
            label="Address Line 2"
            value={editData.addressLine2}
            onChange={(e) =>
              setEditData({ ...editData, addressLine2: e.target.value })
            }
            placeholder="Enter address line 2"
          />

          <InputField
            label="City*"
            value={editData.city}
            onChange={(e) => setEditData({ ...editData, city: e.target.value })}
            placeholder="Enter city"
          />

          <SelectField
            label="Country*"
            value={editData.country}
            defaultSelect="Select a country"
            onChange={(e) =>
              setEditData({ ...editData, country: e.target.value })
            }
            options={[
              { value: "Saudi Arabia", name: "Saudi Arabia" },
              { value: "Egypt", name: "Egypt" },
              { value: "United Arab Emirates", name: "United Arab Emirates" },
              { value: "Kuwait", name: "Kuwait" },
              { value: "Qatar", name: "Qatar" },
            ]}
          />
          <InputField
            label="Add a nickname so you can better manage your addresses*"
            value={editData.nickName}
            onChange={(e) =>
              setEditData({ ...editData, nickName: e.target.value })
            }
            placeholder="Enter nickname"
          />
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleSave}>
          {isAdding ? "Add" : "Save"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
