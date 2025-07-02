import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import axiosInstance from "../../utils/axiosInstance";

export default function useSpecialHandle() {
  const { lang } = useSelector((state) => state.settings);

  const { isLoading, data, error } = useQuery({
    queryKey: ["special-handle", lang],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get("/home/restricted-special-handling");
        if (res.status === 200) {
          return res.data.data || {};
        }
      } catch (error) {
        console.error("Error fetching special handle:", error.message);
        throw error;
      }
    },
  });
  return { isLoading, data, error };
}
