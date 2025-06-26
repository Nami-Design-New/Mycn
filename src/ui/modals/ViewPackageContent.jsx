import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export default function ViewPackageContent({ show, setShow, packageData }) {
  const { t } = useTranslation();

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
          {t("common.packageDetails")} # {packageData.tracking_id}
        </h6>
      </Modal.Header>
      <Modal.Body>
        <div className="package_contents d-flex gap-3 align-items-start">
          <div className="img">
            <img src={packageData.image} alt="contents" />
          </div>
          <div className="content">
            <p>
              {t("common.weight")}: <strong>{packageData.weight}</strong>
            </p>
            <p>
              {t("common.dimensions")}:{" "}
              <strong>{packageData.dimensions}</strong>
            </p>
            <p>
              {t("common.quantity")}: <strong>{packageData.quantity}</strong>
            </p>
            <p>
              {t("common.source")}: <strong>{packageData.source}</strong>
            </p>
            <p>
              {t("common.receiptDate")}:{" "}
              <strong>{packageData.receipt_date}</strong>
            </p>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
