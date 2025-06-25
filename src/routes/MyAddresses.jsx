import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import AddressModal from "../ui/modals/AddressModal";
import useGetAddresses from "../hooks/profile/useGetAddresses";
import ConfirmDeleteModal from "../ui/modals/ConfirmDeleteModal";
import useDeleteAddress from "../hooks/profile/useDeleteAddress";

export default function MyAddresses() {
  const { t } = useTranslation();

  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [addressToEdit, setAddressToEdit] = useState(null);

  const { data: myAddresses } = useGetAddresses();
  const { deleteAddress, isPending } = useDeleteAddress(
    t,
    addressToEdit?.id,
    setShowDeleteModal
  );

  const openModal = (address = null) => {
    setAddressToEdit(address);
    setShowModal(true);
  };

  const openDeleteModal = (address) => {
    setAddressToEdit(address);
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setAddressToEdit(null);
    setShowDeleteModal(false);
  };

  return (
    <div className="my_addresses">
      <div className="row">
        <div className="col-12 header_row">
          <div>
            <h3 className="sec_title">{t("profile.addressesTitle")}</h3>
            <p className="sec_desc">{t("profile.addressesSubTitle")}</p>
          </div>
          <button className="add_btn" onClick={() => openModal()}>
            <i className="fa-regular fa-plus"></i> {t("profile.addAddress")}
          </button>
        </div>

        {myAddresses?.map((address) => (
          <div className="col-lg-4 col-md-6 col-12 p-2" key={address.id}>
            <div className="address_card">
              <div className="address_header">
                <strong>{address.nickname}</strong>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <i className="fas fa-ellipsis-v"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => openModal(address)}>
                      <i className="fas fa-edit me-2"></i>
                      {t("profile.editAddress")}
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => openDeleteModal(address)}>
                      <i className="fas fa-trash me-2"></i>
                      {t("profile.deleteAddress")}
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <p className="address_text">
                {address.full_name} {address.address_1}, {address.address_2},{" "}
                {address.country?.title}, {address.city?.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      <AddressModal
        show={showModal}
        setShow={setShowModal}
        addressToEdit={addressToEdit}
        setAddressToEdit={setAddressToEdit}
      />

      <ConfirmDeleteModal
        show={showDeleteModal}
        closeDeleteModal={closeDeleteModal}
        loading={isPending}
        onConfirm={deleteAddress}
        text={t("address_modal.deleteAddressConfirm")}
      />
    </div>
  );
}
