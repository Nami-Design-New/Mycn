import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import axiosInstance from "../../utils/axiosInstance";

export default function useGetCountries() {
  const { lang } = useSelector((state) => state.settings);

  const { isLoading, data, error } = useQuery({
    queryKey: ["countries", lang],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get("/home/countries");
        if (res.data.code === 200) {
          return res.data.data || {};
        }
      } catch (error) {
        console.error("Error fetching countries:", error.message);
        throw error;
      }
    },
  });
  return { isLoading, data, error };
}
