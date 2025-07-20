import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import axiosInstance from "../../utils/axiosInstance";

export default function useDeleteExpected(t, packageId, setShow, setPackageToEdit) {
  const queryClient = useQueryClient();

  const { mutate: deletePackage, isPending } = useMutation({
    mutationFn: async () => {
      const res = await axiosInstance.delete(
        `/profile/expectedPackages/${packageId}`
      );
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["expected-packages"]);
      toast.success(t("expected.deleteSuccess"));
      setShow(false);
      setPackageToEdit(null);
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message || t("auth.somethingWentWrong"));
    },
  });

  return { deletePackage, isPending };
}
