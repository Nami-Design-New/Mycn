import OrderCard from "../ui/cards/OrderCard";

export default function MyShipments() {
  const shipments = [
    {
      id: 1,
      tracking_number: "MH223",
      address:
        "Ibn Ayas Al-Kanani, As-Sulaymaniyah, Riyadh 12333, Saudi Arabia",
      weight: "10kg",
      shipping_date: "2022-12-12",
      delivery_date: "2023-01-01",
      status: "in_warehouse",
      packages_count: 5,
    },
    {
      id: 2,
      tracking_number: "ZE844",
      address:
        "Zayed City West 4, Zayed City - Abu Dhabi - United Arab Emirates",
      weight: "8kg",
      shipping_date: "2022-12-12",
      delivery_date: "2023-01-02",
      status: "payment_done",
      packages_count: 2,
    },
    {
      id: 3,
      tracking_number: "GT993",
      address: "Al Safa, Jeddah 23454, Saudi Arabia",
      weight: "12kg",
      shipping_date: "2023-03-01",
      delivery_date: "2023-03-10",
      status: "order_approved",
      packages_count: 3,
    },
    {
      id: 4,
      tracking_number: "TR112",
      address: "Sheikh Zayed Road, Dubai, UAE",
      weight: "6kg",
      shipping_date: "2023-03-15",
      delivery_date: "2023-03-22",
      status: "left_china",
      packages_count: 1,
    },
    {
      id: 5,
      tracking_number: "KA221",
      address: "Tahlia Street, Riyadh, Saudi Arabia",
      weight: "15kg",
      shipping_date: "2023-04-01",
      delivery_date: "2023-04-11",
      status: "arrived_saudi_arabia",
      packages_count: 4,
    },
    {
      id: 6,
      tracking_number: "HU540",
      address: "Al Muroor Road, Abu Dhabi, UAE",
      weight: "9kg",
      shipping_date: "2023-04-12",
      delivery_date: "2023-04-18",
      status: "out_for_delivery_to_customer",
      packages_count: 2,
    },
  ];

  return (
    <div className="my_shipments_section mt-80">
      <div className="row">
        {shipments.map((shipment) => (
          <div className="col-lg-6 col-12 p-2" key={shipment.id}>
            <OrderCard shipment={shipment} />
          </div>
        ))}
      </div>
    </div>
  );
}
