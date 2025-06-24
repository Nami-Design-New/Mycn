import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import axiosInstance from "../../utils/axiosInstance";

export default function useGetTransactions() {
  const { lang } = useSelector((state) => state.settings);

  const { isLoading, data, error } = useQuery({
    queryKey: ["transactions", lang],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get("/profile/transactions");
        if (res.status === 200) {
          return res.data.data || {};
        }
      } catch (error) {
        console.error("Error fetching transactions:", error.message);
        throw error;
      }
    },
  });
  return { isLoading, data, error };
}
