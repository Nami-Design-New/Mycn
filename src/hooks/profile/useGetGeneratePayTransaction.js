import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import axiosInstance from "../../utils/axiosInstance";

export default function useGetGeneratePayTransaction(id, enabled = false) {
  const { lang } = useSelector((state) => state.settings);

  const { isLoading, data, error } = useQuery({
    queryKey: ["generatePayTransaction", id, lang],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get(
          `/profile/generatePayTransaction/${id}`
        );
        
        if (res.status === 200) {
          return res.data || {}; 
        }

        return {};
      } catch (error) {
        console.error("Error fetching generatePayTransaction:", error.message);
        throw error;
      }
    },
    enabled: !!id && enabled,
  });

  return { isLoading, data, error };
}