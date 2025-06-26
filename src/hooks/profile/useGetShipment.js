import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import axiosInstance from "../../utils/axiosInstance";

export default function useGetShipment() {
  const { id } = useParams();
  const { lang } = useSelector((state) => state.settings);

  const { isLoading, data, error } = useQuery({
    queryKey: ["shipment", lang, id],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get(`profile/oneShipment/${id}`);
        if (res.status === 200) {
          return res.data.data || {};
        }
      } catch (error) {
        console.error("Error fetching shipment:", error.message);
        throw error;
      }
    },
  });
  return { isLoading, data, error };
}
