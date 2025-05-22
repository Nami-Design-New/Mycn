import { ProgressBar } from "react-bootstrap";
import { useState } from "react";
import ViewPackageContent from "../ui/modals/ViewPackageContent";

export default function ShipmentDetails() {
  const [show, setShow] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const initialPackages = [
    {
      tracking_number: "#NY1001",
      weight: "5 kg",
      dimensions: "30x20x10 cm",
      quantity: "1",
      source: "Apple Store - New York",
      receipt_date: "2023-01-12",
    },
    {
      tracking_number: "#CA1002",
      weight: "3.5 kg",
      dimensions: "25x25x15 cm",
      quantity: "2",
      source: "Amazon Warehouse - California",
      receipt_date: "2023-02-08",
    },
    {
      tracking_number: "#TX1003",
      weight: "4.2 kg",
      dimensions: "35x30x20 cm",
      quantity: "1",
      source: "Best Buy - Texas",
      receipt_date: "2023-03-10",
    },
    {
      tracking_number: "#FL1004",
      weight: "2.8 kg",
      dimensions: "20x20x10 cm",
      quantity: "3",
      source: "Target - Florida",
      receipt_date: "2023-04-14",
    },
    {
      tracking_number: "#IL1005",
      weight: "6 kg",
      dimensions: "40x35x25 cm",
      quantity: "1",
      source: "Walmart - Illinois",
      receipt_date: "2023-05-19",
    },
    {
      tracking_number: "#NJ1006",
      weight: "1.5 kg",
      dimensions: "18x18x12 cm",
      quantity: "1",
      source: "eBay Seller - New Jersey",
      receipt_date: "2023-06-23",
    },
  ];

  const handleView = (pkg) => {
    setSelectedPackage(pkg);
    setShow(true);
  };

  return (
    <div className="shipment_details mt-80">
      <div className="row">
        <div className="col-12 p-2">
          <div className="order_tracking">
            <div className="step">
              <div className="icon">
                <i className="fa-regular fa-warehouse"></i>
              </div>
              <div className="content">
                <h6>Package arrived at China warehouse</h6>
                <span>24/10/2022</span>
              </div>
            </div>

            <ProgressBar now={25} />
          </div>

          <div className="packages mt-4">
            <h5>
              <i className="fa-regular fa-boxes"></i> Packages
            </h5>

            <div className="table_container">
              <table className="mt-3">
                <thead>
                  <tr>
                    <th>Tracking Number</th>
                    <th>Weight</th>
                    <th>Dimensions</th>
                    <th>Quantity</th>
                    <th>Source</th>
                    <th>Receipt Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {initialPackages.map((item, index) => (
                    <tr key={index}>
                      <td>{item.tracking_number}</td>
                      <td>{item.weight}</td>
                      <td>{item.dimensions}</td>
                      <td>{item.quantity}</td>
                      <td>{item.source}</td>
                      <td>{item.receipt_date}</td>
                      <td className="actions">
                        <i
                          className="fa-regular fa-eye cursor-pointer"
                          onClick={() => handleView(item)}
                        ></i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <ViewPackageContent
        show={show}
        setShow={setShow}
        packageData={selectedPackage}
      />
    </div>
  );
}
