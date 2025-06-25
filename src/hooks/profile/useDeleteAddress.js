import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import axiosInstance from "../../utils/axiosInstance";

export default function useDeleteAddress(t, addressId, setShow) {
  const queryClient = useQueryClient();

  const { mutate: deleteAddress, isPending } = useMutation({
    mutationFn: async () => {
      const res = await axiosInstance.delete(`/profile/address/${addressId}`);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["addresses"]);
      toast.success(t("address_modal.addressDeleted"));
      setShow(false);
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message || t("auth.somethingWentWrong"));
    },
  });

  return { deleteAddress, isPending };
}
