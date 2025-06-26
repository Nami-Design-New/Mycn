import OrderCard from "../ui/cards/OrderCard";
import useGetShipments from "../hooks/profile/useGetShipments";

export default function MyShipments() {
  const { data: shipments } = useGetShipments();

  console.log(shipments);
  

  return (
    <div className="my_shipments_section">
      <div className="row">
        {shipments?.map((shipment) => (
          <div className="col-lg-6 col-12 p-2" key={shipment.id}>
            <OrderCard shipment={shipment} />
          </div>
        ))}
      </div>
    </div>
  );
}
