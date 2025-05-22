export default function Notifications() {
  const notifications = [
    {
      id: 1,
      title: "Order Placed",
      description: "Your order has been successfully placed.",
    },
    {
      id: 2,
      title: "Payment Confirmed",
      description: "We have received your payment for order #ZE844.",
    },
    {
      id: 3,
      title: "Package Arrived at Warehouse",
      description:
        "Your package has arrived at our China warehouse and is being processed.",
    },
    {
      id: 4,
      title: "Shipment Ready for Dispatch",
      description:
        "Your shipment is ready and awaiting dispatch from the warehouse.",
    },
    {
      id: 5,
      title: "Shipped from China",
      description:
        "Your shipment has left our China facility and is en route to your destination.",
    },
    {
      id: 6,
      title: "Arrived in Saudi Arabia",
      description:
        "Your package has cleared customs and arrived in Saudi Arabia.",
    },
    {
      id: 7,
      title: "Out for Delivery",
      description: "Your package is out for delivery and will reach you soon.",
    },
    {
      id: 8,
      title: "Delivered Successfully",
      description:
        "Your shipment has been delivered. Thank you for choosing us!",
    },
    {
      id: 9,
      title: "Storage Reminder",
      description:
        "Your package has been in storage for 30 days. Consolidate or ship soon.",
    },
    {
      id: 10,
      title: "Support Ticket Update",
      description:
        "Your support ticket #4523 has been updated. Check your messages.",
    },
  ];

  return (
    <div className="notifications">
      <div className="row">
        {notifications.map((notification) => (
          <div className="col-12 p-2" key={notification.id}>
            <div className="notification_card">
              <div className="icon">
                <i className="fa-regular fa-bell"></i>
              </div>
              <div className="content">
                <h6>{notification.title}</h6>
                <p>{notification.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
