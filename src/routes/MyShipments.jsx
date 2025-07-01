import { useTranslation } from "react-i18next";
import OrderCard from "../ui/cards/OrderCard";
import useGetShipments from "../hooks/profile/useGetShipments";
import ShipmentLoader from "../ui/loaders/ShipmentLoader";

export default function MyShipments() {
  const { t } = useTranslation();
  const { data: shipments, isLoading } = useGetShipments();

  return (
    <div className="my_shipments_section h-100">
      {isLoading && (
        <div className="row">
          {Array.from({ length: 2 }).map((_, index) => (
            <div className="col-lg-6 col-12 p-2" key={index}>
              <ShipmentLoader />
            </div>
          ))}
        </div>
      )}

      <div className="row h-100">
        {shipments?.map((shipment) => (
          <div className="col-lg-6 col-12 p-2" key={shipment.id}>
            <OrderCard shipment={shipment} />
          </div>
        ))}

        {shipments?.length === 0 && (
          <div className="col-12 p-2">
            <div className="empty_wrap">
              <img src="/icons/empty-box.svg" alt="empty-box" />
              <h6>{t("empty_shipments")}</h6>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
