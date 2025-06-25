import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../utils/axiosInstance";
import { useSelector } from "react-redux";

export default function useGetFaqs() {
  const { lang } = useSelector((state) => state.settings);
  
  const { isLoading, data, error } = useQuery({
    queryKey: ["faqs", lang],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get("/home/faqs");
        if (res.status === 200) {
          return res.data.data || {};
        }
      } catch (error) {
        console.error("Error fetching faqs:", error.message);
        throw error;
      }
    },
  });
  return { isLoading, data, error };
}
