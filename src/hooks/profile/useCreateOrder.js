import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import axiosInstance from "../../utils/axiosInstance";
import useGetAddresses from "./useGetAddresses";

export default function useCreateOrder(t, setShow, payload) {
  const { refetch } = useGetAddresses();

  const { mutate: createOrder, isPending } = useMutation({
    mutationFn: async () => {
      const res = await axiosInstance.post("/profile/createShipments", payload);
      return res.data;
    },
    onSuccess: () => {
      refetch();
      setShow(false);
      toast.success(t("address_modal.orderCreated"));
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message || t("auth.somethingWentWrong"));
    },
  });

  return { createOrder, isPending };
}
