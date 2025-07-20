import { Modal, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import InputField from "../forms/InputField";
import SubmitButton from "../forms/SubmitButton";
import useAddExpected from "../../hooks/useAddExpected";

export default function AddExpectedModal({
  show,
  setShow,
  packageToEdit,
  setPackageToEdit,
}) {
  const { t } = useTranslation();

  const { register, handleSubmit, reset, watch, setValue, errors, isLoading } =
    useAddExpected(t, packageToEdit?.id, setShow);

  useEffect(() => {
    if (packageToEdit) {
      reset({
        tracking_id: packageToEdit?.tracking_id,
        weight: packageToEdit?.weight,
        size: packageToEdit?.size,
        source: packageToEdit?.source,
      });
    }
  }, [packageToEdit, reset]);

  const imageFile = watch("image");
  const fallbackImage = packageToEdit?.image;

  const imagePreview = imageFile
    ? URL.createObjectURL(imageFile)
    : fallbackImage;

  return (
    <Modal
      show={show}
      onHide={() => {
        setShow(false);
        reset();
        setPackageToEdit({});
      }}
      centered
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <h6>{t("profile.addExpectedPackage")}</h6>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form className="form_ui" onSubmit={handleSubmit}>
          <div className="form_group">
            <InputField
              label={t("common.trackingNumber")}
              placeholder="#0037"
              {...register("tracking_id")}
              error={errors.tracking_id?.message}
            />
            <InputField
              label={t("common.weight")}
              placeholder="00"
              {...register("weight")}
              error={errors.weight?.message}
            />
          </div>

          <div className="form_group">
            <InputField
              label={t("common.size")}
              placeholder="00"
              {...register("size")}
              error={errors.size?.message}
            />
            <InputField
              label={t("common.source")}
              placeholder="ex: amazon"
              {...register("source")}
              error={errors.source?.message}
            />
          </div>

          <label htmlFor="image" className="image_field mb-3">
            <input
              type="file"
              name="image"
              id="image"
              onChange={(e) => {
                const file = e.target.files[0];
                setValue("image", file);
              }}
            />
            <h6 className="d-flex align-items-center justify-content-center">
              {imagePreview ? (
                <img
                  className="img-fluid me-2"
                  style={{ height: "132px", aspectRatio: "1/1" }}
                  src={imagePreview}
                  alt="preview"
                />
              ) : (
                <>
                  <i className="fa-regular fa-image me-2"></i>
                  {t("common.uploadImage")}
                </>
              )}
            </h6>
          </label>

          {watch("image") && (
            <>
              {errors.image?.message && (
                <Form.Control.Feedback type="invalid" className="mb-3">
                  {errors.image?.message}
                </Form.Control.Feedback>
              )}
            </>
          )}

          <SubmitButton text={t("common.save")} loading={isLoading} />
        </Form>
      </Modal.Body>
    </Modal>
  );
}
