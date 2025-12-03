import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "sonner";
import * as yup from "yup";
import axiosInstance from "../utils/axiosInstance";

export default function useAddExpected(t, id, setShow) {
  const queryClient = useQueryClient();

  const schema = yup.object({
    tracking_id: yup.string().required(t("validation.required")),
    source: yup.string().required(t("validation.required")),
    size: yup.string().required(t("validation.required")),
    weight: yup.string().required(t("validation.required")),
    image: yup.mixed().nullable(),
  });

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      tracking_id: "",
      source: "",
      size: "",
      weight: "",
      image: null,
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (formData) => {
      const url = id
        ? `/profile/expectedPackages/${id}`
        : `/profile/expectedPackages`;

      const request = new FormData();
      request.append("tracking_id", formData.tracking_id);
      request.append("source", formData.source);
      request.append("size", formData.size);
      request.append("weight", formData.weight);

      if (formData?.image) request.append("image", formData.image);


      if (id) {
        request.append("_method", "PUT");
      }

      const res = await axiosInstance.post(url, request, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return res.data;
    },
    onSuccess: (res) => {
      if (res.code === 200) {
        queryClient.invalidateQueries(["expectedPackages"]);
        toast.success(
          id ? t("expected.editSuccess") : t("expected.addSuccess")
        );
        setShow(false);
        reset();
      } else {
        toast.error(res.message);
      }
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message || t("auth.somethingWentWrong"));
    },
  });

  return {
    register,
    handleSubmit: handleSubmit(mutate),
    reset,
    setValue,
    watch,
    errors,
    isLoading: isPending,
  };
}
