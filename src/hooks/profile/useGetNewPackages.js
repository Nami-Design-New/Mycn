import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../utils/axiosInstance";

export default function useGetNewPackages() {
  const { isLoading, data, error, refetch } = useQuery({
    queryKey: ["new-packages"],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get("/profile/packages");
        if (res.data.code === 200) {
          return res.data.data || {};
        }
      } catch (error) {
        console.error("Error fetching new packages:", error.message);
        throw error;
      }
    },
  });
  return { isLoading, data, error, refetch };
}
