import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import OrderShipment from "../ui/modals/OrderShipment";
import useGetSettings from "../hooks/settings/useGetSettings";
import useGetNewPackages from "../hooks/profile/useGetNewPackages";
import PackageLoader from "../ui/loaders/PackageLoader";

export default function NewPackages() {
  const { t } = useTranslation();
  const { data: settings } = useGetSettings();
  const { data: newPackagesData, isLoading } = useGetNewPackages();

  const maxPackages = settings?.max_orders_count || 6;

  const [newPackages, setNewPackages] = useState([]);
  const [consolidated, setConsolidated] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (newPackagesData) {
      setNewPackages(newPackagesData);
    }
  }, [newPackagesData]);

  const handleDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    if (source.droppableId === destination.droppableId) return;

    if (
      destination.droppableId === "consolidated" &&
      consolidated.length >= maxPackages
    ) {
      toast.warning(
        t("profile.maxPackagesError", { maxPackages: maxPackages })
      );
      return;
    }

    const sourceList =
      source.droppableId === "newPackages"
        ? [...newPackages]
        : [...consolidated];

    const destList =
      destination.droppableId === "newPackages"
        ? [...newPackages]
        : [...consolidated];

    const [movedItem] = sourceList.splice(source.index, 1);
    destList.splice(destination.index, 0, movedItem);

    if (source.droppableId === "newPackages") {
      setNewPackages(sourceList);
      setConsolidated(destList);
    } else {
      setNewPackages(destList);
      setConsolidated(sourceList);
    }
  };

  return (
    <div className="new_packages">
      <div className="row">
        <div className="col-12 p-2">
          <h6 className="sec_title">{t("profile.newPackagesTitle")}</h6>
          <p className="sec_desc">
            {t("profile.newPackagesSubtitle", { maxPackages: maxPackages })}
          </p>
        </div>

        <DragDropContext onDragEnd={handleDragEnd}>
          <div className="col-md-6 col-12 p-2">
            <div className="list">
              <h5>{t("profile.newPackages")}</h5>
              <Droppable droppableId="newPackages">
                {(provided) => (
                  <div
                    className="package_list"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {isLoading && (
                      <>
                        {Array.from({ length: 3 }).map((_, index) => (
                          <PackageLoader key={index} />
                        ))}
                      </>
                    )}

                    {newPackages?.map((pkg, index) => (
                      <Draggable
                        key={pkg.id}
                        draggableId={pkg.id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            className="package_item"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <div className="icon">
                              <img src="/icons/package.svg" alt="package" />
                            </div>
                            <div className="content">
                              <ul>
                                <li className="w-100">
                                  {t("common.trackingNumber")}:{" "}
                                  <b># {pkg.tracking_id}</b>
                                </li>
                                <li className="w-50">
                                  {t("common.weight")}: <b>{pkg.weight}</b>
                                </li>
                                <li className="w-50">
                                  {t("common.size")}: <b>{pkg.size}</b>
                                </li>
                                <li>
                                  {t("common.source")}: <b>{pkg.source}</b>
                                </li>
                                <li className="pe-4">
                                  {t("common.reciept_date")}:{" "}
                                  <b>{pkg.receipt_date}</b>
                                </li>
                              </ul>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}

                    {newPackages?.length === 0 && (
                      <p>{t("profile.noNewPackages")}</p>
                    )}

                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          </div>

          <div className="col-md-6 col-12 p-2">
            <div className="list target">
              <h5>
                {t("profile.consolidated")} ( {t("common.max")} {maxPackages} )
              </h5>
              <Droppable droppableId="consolidated">
                {(provided) => (
                  <div
                    className="package_list consolidated"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {consolidated?.map((pkg, index) => (
                      <Draggable
                        key={pkg.id}
                        draggableId={pkg.id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            className="package_item"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <div className="icon">
                              <img src="/icons/check.svg" alt="package" />
                            </div>
                            <div className="content">
                              <ul>
                                <li className="w-100">
                                  {t("common.trackingNumber")}:{" "}
                                  <b># {pkg.tracking_id}</b>
                                </li>
                                <li className="w-50">
                                  {t("common.weight")}: <b>{pkg.weight}</b>
                                </li>
                                <li className="w-50">
                                  {t("common.size")}: <b>{pkg.size}</b>
                                </li>
                                <li>
                                  {t("common.source")}: <b>{pkg.source}</b>
                                </li>
                                <li className="pe-4">
                                  {t("common.reciept_date")}:{" "}
                                  <b>{pkg.receipt_date}</b>
                                </li>
                              </ul>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}

                    {consolidated?.length === 0 && (
                      <div className="drag_here">
                        <img src="/icons/drag.svg" alt="empty" />
                        <p>{t("profile.dragDrop")}</p>
                      </div>
                    )}
                  </div>
                )}
              </Droppable>

              {consolidated.length > 0 && (
                <button onClick={() => setShowModal(true)} className="log">
                  {t("profile.orderShipment")}
                </button>
              )}
            </div>
          </div>
        </DragDropContext>
      </div>

      <OrderShipment
        show={showModal}
        setShow={setShowModal}
        consolidated={consolidated}
      />
    </div>
  );
}
