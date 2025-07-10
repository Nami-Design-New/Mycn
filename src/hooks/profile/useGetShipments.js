import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import axiosInstance from "../../utils/axiosInstance";

export default function useGetShipments() {
  const { lang } = useSelector((state) => state.settings);

  const { isLoading, data, error } = useQuery({
    queryKey: ["shipments", lang],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get("/profile/shipments");
        if (res.data.code === 200) {
          return res.data.data || {};
        }
      } catch (error) {
        console.error("Error fetching shipments:", error.message);
        throw error;
      }
    },
  });
  return { isLoading, data, error };
}
