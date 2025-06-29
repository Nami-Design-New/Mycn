import { useTranslation } from "react-i18next";
import OrderCard from "../ui/cards/OrderCard";
import useGetShipments from "../hooks/profile/useGetShipments";

export default function MyShipments() {
  const { t } = useTranslation();
  const { data: shipments } = useGetShipments();

  return (
    <div className="my_shipments_section h-100">
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
