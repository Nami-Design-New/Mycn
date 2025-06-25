import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "sonner";
import * as yup from "yup";
import axiosInstance from "../../utils/axiosInstance";

export default function useAddEditAddress(t, addressId, onClose) {
  const queryClient = useQueryClient();

  const schema = yup.object({
    nickname: yup.string().required(t("validation.required")),
    full_name: yup.string().required(t("validation.required")),
    phone: yup.string().required(t("validation.required")),
    address_1: yup.string().required(t("validation.required")),
    address_2: yup.string().required(t("validation.required")),
    country_id: yup.string().required(t("validation.required")),
    city_id: yup.string().required(t("validation.required")),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      nickname: "",
      full_name: "",
      phone: "",
      address_1: "",
      address_2: "",
      country_id: "",
      city_id: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (formData) => {
      const url = addressId
        ? `/profile/address/${addressId}`
        : `/profile/address`;
      const method = addressId ? "put" : "post";
      const res = await axiosInstance[method](url, formData);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["addresses"]);
      toast.success(
        addressId
          ? t("address_modal.addressUpdated")
          : t("address_modal.addressAdded")
      );
      onClose();
      reset();
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message || t("auth.somethingWentWrong"));
    },
  });

  return {
    register,
    handleSubmit: handleSubmit(mutate),
    reset,
    errors,
    isLoading: isPending,
  };
}
