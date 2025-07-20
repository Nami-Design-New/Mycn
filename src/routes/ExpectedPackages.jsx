import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import AddExpectedModal from "../ui/modals/AddExpectedModal";
import useGetExpectedPackages from "../hooks/profile/useGetExpectedPackages";
import AddressLoading from "../ui/loaders/AddressLoading";
import ConfirmDeleteModal from "../ui/modals/ConfirmDeleteModal";
import useDeleteExpected from "./../hooks/profile/useDeleteExpected";

export default function ExpectedPackages() {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [packageToEdit, setPackageToEdit] = useState(null);
  const { data: expectedPackages, isLoading } = useGetExpectedPackages();

  const openDeleteModal = (pkg) => {
    setPackageToEdit(pkg);
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
    setPackageToEdit(null);
  };

  const { deletePackage, isPending } = useDeleteExpected(
    t,
    packageToEdit?.id,
    setShowDeleteModal,
    setPackageToEdit
  );

  return (
    <div className="row p-2">
      <div className="col-12 d-flex align-items-center justify-content-between mb-4">
        <div>
          <h3 className="sec_title">{t("profile.expectedPackages")}</h3>
        </div>
        <button className="add_btn m-0" onClick={() => setShowModal(true)}>
          <i className="fa-regular fa-plus"></i> {t("profile.addPackage")}
        </button>
      </div>

      {expectedPackages?.map((expectedPackage) => (
        <div className="col-lg-4 col-md-6 col-12 p-2" key={expectedPackage.id}>
          <div className="address_card p-3">
            <div className="d-flex justify-content-end align-items-center">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <i className="fas fa-ellipsis-v"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => {
                      setShowModal(true);
                      setPackageToEdit(expectedPackage);
                    }}
                  >
                    <i className="fas fa-edit me-2"></i>
                    {t("expected.edit")}
                  </Dropdown.Item>

                  <Dropdown.Item
                    onClick={() => openDeleteModal(expectedPackage)}
                  >
                    <i className="fas fa-trash me-2"></i>
                    {t("expected.delete")}
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div className="img">
              <img src={expectedPackage?.image} alt={expectedPackage.source} />
            </div>

            <ul className="d-flex flex-wrap gap-3 flex-row">
              <li>
                {t("common.trackingNumber")}: {expectedPackage.tracking_id}
              </li>
              <li>
                {t("common.size")}: {expectedPackage.size}
              </li>
              <li>
                {t("common.weight")}: {expectedPackage.weight}
              </li>
              <li>
                {t("common.source")}: {expectedPackage.source}
              </li>
            </ul>
          </div>
        </div>
      ))}

      {isLoading && (
        <div className="row">
          {Array.from({ length: 3 }).map((_, index) => (
            <div className="col-lg-4 col-md-6 col-12 p-2" key={index}>
              <AddressLoading />
            </div>
          ))}
        </div>
      )}

      {expectedPackages?.length === 0 && (
        <div className="col-12 p-2">
          <div className="empty_wrap">
            <img src="/icons/empty-box.svg" alt="empty-box" />
            <h6>{t("expected.empty")}</h6>
          </div>
        </div>
      )}

      <AddExpectedModal
        show={showModal}
        setShow={setShowModal}
        packageToEdit={packageToEdit}
        setPackageToEdit={setPackageToEdit}
      />

      <ConfirmDeleteModal
        show={showDeleteModal}
        closeDeleteModal={closeDeleteModal}
        loading={isPending}
        onConfirm={deletePackage}
        text={t("expected.deleteConfirm")}
      />
    </div>
  );
}
