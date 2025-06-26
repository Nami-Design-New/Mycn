import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCookies } from "react-cookie";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import SubmitButton from "../../ui/forms/SubmitButton";
import PasswordField from "../../ui/forms/PasswordField";
import axiosInstance from "../../utils/axiosInstance";
import * as yup from "yup";

export default function Step3({ setStep, email }) {
  const { t } = useTranslation();
  const [, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  const schema = yup.object().shape({
    password: yup
      .string()
      .required(t("validation.required"))
      .min(6, t("validation.min", { min: 8 }))
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!#%*?&]{8,}$/,
        t("validation.passwordComplexity")
      ),
    password_confirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], t("validation.passwordMatch"))
      .required(t("validation.required")),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting: loading },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      email: email,
      password: "",
      password_confirmation: "",
    },
  });

  const handleReset = async (data) => {
    try {
      const res = await axiosInstance.post("auth/resetPassword", data);
      if (res.status === 200) {
        setCookie("token", res.data?.data?.auth?.token, {
          path: "/",
          secure: true,
          sameSite: "Strict",
        });
        navigate("/profile");
        toast.success(t("auth.passwordChangedSuccess"));
      }
    } catch (error) {
      toast.error(error.message || t("auth.somethingWentWrong"));
    }
  };

  return (
    <>
      <h3 className="section_title">{t("auth.resetPasswordTitle3")}</h3>
      <p className="section_description">{t("auth.resetPasswordSubtitle3")}</p>

      <form className="form_ui mt-5" onSubmit={handleSubmit(handleReset)}>
        <div className="form_group mb-4">
          <PasswordField
            label={t("auth.newPassword")}
            placeholder={t("auth.enterPassword")}
            error={errors?.password?.message}
            {...register("password")}
          />
        </div>

        <div className="form_group mb-4">
          <PasswordField
            label={t("auth.confirmPassword")}
            placeholder={t("auth.enterPassword")}
            error={errors?.password_confirmation?.message}
            {...register("password_confirmation")}
          />
        </div>

        <div className="reset_btns">
          <div
            aria-label="Back"
            className="back_btn"
            onClick={() => setStep(1)}
          >
            <i className="fal fa-arrow-right"></i>
          </div>

          <SubmitButton text={t("auth.confirm")} loading={loading} />
        </div>
      </form>
    </>
  );
}
