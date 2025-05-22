import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { useState } from "react";
import { toast } from "sonner";

const initialPackages = [
  {
    id: "1",
    weight: "5 lb",
    source: "Apple Store",
    receipt_date: "2023-01-01",
    tracking_number: "#8498",
    size: "10 x 10 x 10 cm",
  },
  {
    id: "2",
    weight: "3 lb",
    source: "Amazon",
    receipt_date: "2023-02-15",
    tracking_number: "#5678",
    size: "15 x 15 x 15 cm",
  },
  {
    id: "3",
    weight: "4 lb",
    source: "Best Buy",
    receipt_date: "2023-03-10",
    tracking_number: "#1234",
    size: "20 x 20 x 20 cm",
  },
  {
    id: "4",
    weight: "2 lb",
    source: "eBay",
    receipt_date: "2023-04-05",
    tracking_number: "#4321",
    size: "25 x 25 x 25 cm",
  },
  {
    id: "5",
    weight: "6 lb",
    source: "Walmart",
    receipt_date: "2023-05-21",
    tracking_number: "#8765",
    size: "30 x 30 x 30 cm",
  },
  {
    id: "6",
    weight: "1 lb",
    source: "Target",
    receipt_date: "2023-06-18",
    tracking_number: "#6789",
    size: "12 x 12 x 12 cm",
  },
  {
    id: "7",
    weight: "7 lb",
    source: "AliExpress",
    receipt_date: "2023-07-25",
    tracking_number: "#9876",
    size: "35 x 35 x 35 cm",
  },
];

export default function NewPackages() {
  const [newPackages, setNewPackages] = useState(initialPackages);
  const [consolidated, setConsolidated] = useState([]);

  const handleDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    if (source.droppableId === destination.droppableId) return;

    if (
      destination.droppableId === "consolidated" &&
      consolidated.length >= 6
    ) {
      toast.error("You can't have more than 6 packages");
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
    <div className="new_packages mt-80">
      <div className="row">
        <div className="col-12 p-2">
          <h6 className="sec_title">Smart Shipping Starts Here</h6>
          <p className="sec_desc">
            Drag, drop, and dominate your deliveries. Organize up to 6 packages
            into one smart shipment to save time, space, and international
            shipping costs. Your package control center just got an upgrade.
          </p>
        </div>

        <DragDropContext onDragEnd={handleDragEnd}>
          <div className="col-md-6 col-12 p-2">
            <div className="list">
              <h5>New Packages</h5>
              <Droppable droppableId="newPackages">
                {(provided) => (
                  <div
                    className="package_list"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {newPackages.map((pkg, index) => (
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
                                  Tracking Number: <b>{pkg.tracking_number}</b>
                                </li>
                                <li className="w-50">
                                  Weight: <b>{pkg.weight}</b>
                                </li>
                                <li>
                                  Size: <b>{pkg.size}</b>
                                </li>
                                <li>
                                  Source: <b>{pkg.source}</b>
                                </li>
                                <li>
                                  Reciept Date: <b>{pkg.reciept_date}</b>
                                </li>
                              </ul>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          </div>

          <div className="col-md-6 col-12 p-2">
            <div className="list target">
              <h5>Consolidated Packages (max 6)</h5>
              <Droppable droppableId="consolidated">
                {(provided) => (
                  <div
                    className="package_list consolidated"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {consolidated.map((pkg, index) => (
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
                                  Tracking Number: <b>{pkg.tracking_number}</b>
                                </li>
                                <li className="w-50">
                                  Weight: <b>{pkg.weight}</b>
                                </li>
                                <li>
                                  Size: <b>{pkg.size}</b>
                                </li>
                                <li>
                                  Source: <b>{pkg.source}</b>
                                </li>
                                <li>
                                  Reciept Date: <b>{pkg.reciept_date}</b>
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
                        <p>Drag and drop your packages here</p>
                      </div>
                    )}
                  </div>
                )}
              </Droppable>
              {consolidated.length > 0 && (
                <button className="log">Start Shipment</button>
              )}
            </div>
          </div>
        </DragDropContext>
      </div>
    </div>
  );
}
