import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import axiosInstance from "../../utils/axiosInstance";

export default function useGetAddresses() {
  const { lang } = useSelector((state) => state.settings);

  const { isLoading, data, error } = useQuery({
    queryKey: ["addresses", lang],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get("/profile/address");
        if (res.status === 200) {
          return res.data.data || {};
        }
      } catch (error) {
        console.error("Error fetching user addresses:", error.message);
        throw error;
      }
    },
  });
  return { isLoading, data, error };
}
