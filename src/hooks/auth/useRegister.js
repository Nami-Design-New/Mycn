import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";
import * as yup from "yup";
import axiosInstance from "../../utils/axiosInstance";

export default function useRegister(t, setStep) {
  const navigate = useNavigate();
  const [code, setCode] = useState(null);
  const [, setCookie] = useCookies(["token"]);

  const schema = yup.object().shape({
    first_name: yup.string().required(t("validation.required")),
    last_name: yup.string().required(t("validation.required")),
    whatsapp: yup.string().required(t("validation.required")),
    country_id: yup.string().required(t("validation.required")),
    email: yup
      .string()
      .email(t("validation.email"))
      .required(t("validation.required")),
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
    terms: yup
      .boolean()
      .oneOf([true], t("validation.terms"))
      .required(t("validation.required")),
  });

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      first_name: "",
      last_name: "",
      whatsapp: "",
      country_id: "",
      email: "",
      password: "",
      password_confirmation: "",
      terms: false,
    },
  });

  const { mutate: submitRegister, isPending: isPendingRegister } = useMutation({
    mutationFn: async () => {
      const response = await axiosInstance.post("/auth/register", watch());
      return response.data;
    },
    onSuccess: (data) => {
      toast.success(t("auth.registerSuccess"));

      setCookie("token", data.data?.auth?.token, {
        path: "/",
        secure: true,
        sameSite: "Strict",
      });

      navigate("/profile");
    },
    onError: (error) => {
      toast.error(
        error.response?.data?.message || error.message || "Something went wrong"
      );
    },
  });

  const { mutate: submitSendCode, isPending: isPendingSendCode } = useMutation({
    mutationFn: async (data) => {
      const response = await axiosInstance.post("/auth/sendOtp", {
        email: data.email,
        type: "register",
      });
      return response.data;
    },
    onSuccess: () => {
      toast.success(t("auth.codeSent", { email: watch("email") }));
      setStep(2);
    },
    onError: (error) => {
      toast.error(
        error.response?.data?.message || error.message || "Something went wrong"
      );
    },
  });

  const { mutate: checkCode, isPending: isPendingCheckCode } = useMutation({
    mutationFn: async () => {
      const response = await axiosInstance.post("/auth/checkCode", {
        email: watch("email"),
        code,
      });
      return response.data;
    },
    onSuccess: () => {
      const formData = watch();
      submitRegister({
        ...formData,
        code,
      });
    },
    onError: (error) => {
      toast.error(t("auth.wrongCode"));
      console.log("error in step 2", error);
    },
  });

  return {
    register,
    handleSubmit,
    errors,
    isLoading: isPendingRegister || isPendingSendCode || isPendingCheckCode,
    checkCode,
    watch,
    setCode,
    code,
    submitSendCode,
  };
}
