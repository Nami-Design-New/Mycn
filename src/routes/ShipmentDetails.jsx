import { ProgressBar } from "react-bootstrap";

export default function ShipmentDetails() {
  return (
    <div className="shipment_details">
      <div className="row">
        <div className="col-12 p-2">
          <div className="order_tracking">
            <div className="step">
              <div className="icon">
                <i className="fa-regular fa-warehouse"></i>
              </div>
              <div className="content">
                <h6>Package arrived at china warehouse</h6>
                <span>24/10/2022</span>
              </div>
            </div>

            <ProgressBar now={25} />
          </div>

          <div className="packages"></div>
        </div>
      </div>
    </div>
  );
}
