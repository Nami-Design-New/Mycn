import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import axiosInstance from "../../utils/axiosInstance";
import useGetNewPackages from "./useGetNewPackages";

export default function useCreateOrder(t, setShow, payload) {
  const { refetch } = useGetNewPackages();
  const navigate = useNavigate();

  const { mutate: createOrder, isPending } = useMutation({
    mutationFn: async () => {
      const res = await axiosInstance.post("/profile/createShipments", payload);
      return res.data;
    },
    onSuccess: () => {
      refetch();
      setShow(false);
      navigate("/profile/my-shipments");
      toast.success(t("orderModel.orderCreated"));
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message || t("auth.somethingWentWrong"));
    },
  });

  return { createOrder, isPending };
}
