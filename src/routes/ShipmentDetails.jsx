import { ProgressBar } from "react-bootstrap";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ViewPackageContent from "../ui/modals/ViewPackageContent";
import useGetShipment from "../hooks/profile/useGetShipment";
import { ORDER_STATUS } from "../utils/constants";

export default function ShipmentDetails() {
  const [show, setShow] = useState(false);
  const { t } = useTranslation();
  const [selectedPackage, setSelectedPackage] = useState(null);
  const { data: shipment } = useGetShipment();

  const handleView = (pkg) => {
    setSelectedPackage(pkg);
    setShow(true);
  };

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
                <h6>{t(`orderStatus.${shipment?.status}`)}</h6>
                <span>{shipment?.updated_at}</span>
              </div>
            </div>

            <ProgressBar
              now={
                (100 / ORDER_STATUS.length) *
                (ORDER_STATUS.indexOf(shipment?.status) + 1)
              }
            />
          </div>

          <div className="packages mt-4">
            <h5>
              <i className="fa-regular fa-boxes"></i> {t("common.packages")}
            </h5>

            <div className="table_container">
              <table className="mt-3">
                <thead>
                  <tr>
                    <th>{t("common.trackingNumber")}</th>
                    <th>{t("common.weight")}</th>
                    <th>{t("common.dimensions")}</th>
                    <th>{t("common.source")}</th>
                    <th>{t("common.actions")}</th>
                  </tr>
                </thead>

                <tbody>
                  {shipment?.details?.map((item, index) => (
                    <tr key={index}>
                      <td>{item?.package.tracking_id}</td>
                      <td>{item?.package.weight}</td>
                      <td>{item?.package.size}</td>
                      <td>{item?.package.source}</td>
                      <td className="actions">
                        <i
                          className="fa-regular fa-eye cursor-pointer"
                          onClick={() => handleView(item?.package)}
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
