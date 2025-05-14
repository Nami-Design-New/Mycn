import { Modal, Button, Form } from "react-bootstrap";

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
          <Form.Group className="mb-3">
            <Form.Text className="text-muted">
              First and last name must match the government-issued ID of the
              person receiving the shipment.
            </Form.Text>

            <div className="row mt-2">
              <div className="col-md-6 mb-3">
                <Form.Label>First Name*</Form.Label>
                <Form.Control
                  type="text"
                  value={editData.firstName}
                  onChange={(e) =>
                    setEditData({ ...editData, firstName: e.target.value })
                  }
                />
              </div>
              <div className="col-md-6 mb-3">
                <Form.Label>Last Name*</Form.Label>
                <Form.Control
                  type="text"
                  value={editData.lastName}
                  onChange={(e) =>
                    setEditData({ ...editData, lastName: e.target.value })
                  }
                />
              </div>
            </div>

            <Form.Check
              type="checkbox"
              label="This is a business address"
              checked={editData.isBusiness || false}
              onChange={(e) =>
                setEditData({ ...editData, isBusiness: e.target.checked })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone*</Form.Label>
            <Form.Control
              type="text"
              value={editData.phone}
              onChange={(e) =>
                setEditData({ ...editData, phone: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Address Line 1*</Form.Label>
            <Form.Control
              type="text"
              value={editData.addressLine1}
              onChange={(e) =>
                setEditData({ ...editData, addressLine1: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Address Line 2*</Form.Label>
            <Form.Control
              type="text"
              value={editData.addressLine2}
              onChange={(e) =>
                setEditData({ ...editData, addressLine2: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>City*</Form.Label>
            <Form.Control
              type="text"
              value={editData.city}
              onChange={(e) =>
                setEditData({ ...editData, city: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Country*</Form.Label>
            <Form.Select
              value={editData.country}
              onChange={(e) =>
                setEditData({ ...editData, country: e.target.value })
              }
            >
              <option value="">Select a country</option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Egypt">Egypt</option>
              <option value="United Arab Emirates">United Arab Emirates</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Qatar">Qatar</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>
              Add a nickname so you can better manage your addresses*
            </Form.Label>
            <Form.Control
              type="text"
              value={editData.nickName}
              onChange={(e) =>
                setEditData({ ...editData, nickName: e.target.value })
              }
            />
          </Form.Group>
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
