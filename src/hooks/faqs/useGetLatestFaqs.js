import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../utils/axiosInstance";

export default function useGetLatestFaqs() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["lateset-faqs"],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get("home/latestFaqs");
        if (res.status === 200) {
          return res.data.data || {};
        }
      } catch (error) {
        console.error("Error fetching latest faqs:", error.message);
        throw error;
      }
    },
  });
  return { isLoading, data, error };
}
