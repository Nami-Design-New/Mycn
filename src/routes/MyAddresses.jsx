import { useState } from "react";
import AddressModal from "../ui/modals/AddressModal";

export default function MyAddresses() {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      firstName: "Ahmed",
      lastName: "Elsayed",
      phone: "123-456-7890",
      addressLine1: "123 Main St",
      addressLine2: "Apt 4B",
      city: "New York",
      country: "Saudi Arabia",
      nickName: "Home Address",
    },
    {
      id: 2,
      firstName: "Ahmed",
      lastName: "Elsayed",
      phone: "123-456-7890",
      addressLine1: "456 Office Rd",
      addressLine2: "Suite 2A",
      city: "Cairo",
      country: "Egypt",
      nickName: "Office",
    },
  ]);

  const [openMenuId, setOpenMenuId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState({});
  const [isAdding, setIsAdding] = useState(false);

  const toggleMenu = (id) => {
    setOpenMenuId((prevId) => (prevId === id ? null : id));
  };

  const handleDelete = (id) => {
    setAddresses((prev) => prev.filter((address) => address.id !== id));
  };

  const handleEditClick = (address) => {
    setEditData(address);
    setIsAdding(false);
    setShowModal(true);
    setOpenMenuId(null);
  };

  const handleAddNew = () => {
    setEditData({
      id: Math.random(),
      firstName: "",
      lastName: "",
      phone: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      country: "",
      nickName: "",
    });
    setIsAdding(true);
    setShowModal(true);
  };

  const handleSave = () => {
    if (isAdding) {
      setAddresses((prev) => [...prev, editData]);
    } else {
      setAddresses((prev) =>
        prev.map((item) => (item.id === editData.id ? editData : item))
      );
    }
    setShowModal(false);
  };

  return (
    <div className="my_addresses mt-80">
      <div className="row">
        <div className="col-12 header_row">
          <div>
            <h3 className="sec_title">My Addresses</h3>
            <p className="sec_desc">
              Manage your shipping addresses and track your shipments.
            </p>
          </div>
          <button className="add_btn" onClick={handleAddNew}>
            <i className="fa-regular fa-plus"></i> Add New Address
          </button>
        </div>

        {addresses.map((address) => (
          <div className="col-lg-4 col-md-6 col-12 p-2" key={address.id}>
            <div className="address_card">
              <div className="address_header">
                <strong>{address.nickName}</strong>
                <div className="menu_container">
                  <button
                    className="menu_btn"
                    onClick={() => toggleMenu(address.id)}
                  >
                    <i className="fas fa-ellipsis-v"></i>
                  </button>
                  {openMenuId === address.id && (
                    <div className="menu_dropdown">
                      <div
                        className="menu_item"
                        onClick={() => handleEditClick(address)}
                      >
                        <i className="fas fa-edit me-2"></i> Edit Address
                      </div>
                      <div
                        className="menu_item"
                        onClick={() => handleDelete(address.id)}
                      >
                        <i className="fas fa-trash-alt me-2"></i> Delete Address
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <p className="address_text">
                {address.firstName} {address.lastName}, {address.addressLine1},{" "}
                {address.addressLine2}, {address.city}, {address.country}
              </p>
            </div>
          </div>
        ))}
      </div>

      <AddressModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleSave={handleSave}
        editData={editData}
        setEditData={setEditData}
        isAdding={isAdding}
      />
    </div>
  );
}
