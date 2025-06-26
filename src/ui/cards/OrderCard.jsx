import { ProgressBar } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { ORDER_STATUS } from "./../../utils/constants";

export default function OrderCard({ shipment }) {
  const { t } = useTranslation();

  return (
    <Link to={`/profile/my-shipments/${shipment?.id}`} className="shipment">
      <div className="head">
        <h6>
          <i className="fa-regular fa-cube"></i> {shipment?.id} #
        </h6>
        <Link to={`/profile/my-shipments/${shipment?.id}`}>
          {t("common.details")}
        </Link>
      </div>

      <p className="w-100">
        <i className="fa-regular fa-location-dot"></i> {t("common.address")}:{" "}
        {shipment?.address?.address_1}
      </p>

      <p>
        <i className="fa-regular fa-weight-hanging"></i>{" "}
        {t("common.packages_count")}: <b>{shipment?.packages_count}</b>
      </p>

      <p>
        <i className="fa-regular fa-weight-hanging"></i> {t("common.weight")}:{" "}
        <b>{shipment?.weight} kg</b>
      </p>

      <p className="w-100">
        <i className="fa-regular fa-calendar"></i> {t("common.shipping_date")}:{" "}
        {shipment?.shipping_date}
      </p>

      <div className="status">
        <span>
          {t("common.status")}: {t(`orderStatus.${shipment?.status}`)}
        </span>
        <ProgressBar
          now={
            (100 / ORDER_STATUS.length) *
            (ORDER_STATUS.indexOf(shipment?.status) + 1)
          }
        />
      </div>
    </Link>
  );
}
