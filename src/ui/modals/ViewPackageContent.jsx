import { Modal } from "react-bootstrap";

export default function ViewPackageContent({ show, setShow, packageData }) {
  if (!packageData) return null;

  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="pb-0">
        <h6>
          Package <b>{packageData.tracking_number}</b> details
        </h6>
      </Modal.Header>
      <Modal.Body>
        <div className="package_contents d-flex gap-3 align-items-start">
          <div className="img">
            <img src="/images/contents.jpg" alt="contents" />
          </div>
          <div className="content">
            <p>
              Weight: <strong>{packageData.weight}</strong>
            </p>
            <p>
              Dimensions: <strong>{packageData.dimensions}</strong>
            </p>
            <p>
              Quantity: <strong>{packageData.quantity}</strong>
            </p>
            <p>
              source: <strong>{packageData.source}</strong>
            </p>
            <p>
              Receipt Date: <strong>{packageData.receipt_date}</strong>
            </p>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
