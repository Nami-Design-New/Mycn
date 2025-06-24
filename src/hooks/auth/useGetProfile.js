import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../utils/axiosInstance";

export default function useGetProfile() {

  const { isLoading, data, error } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get("/profile");
        if (res.status === 200) {
          return res.data.data || {};
        }
      } catch (error) {
        console.error("Error fetching profile:", error.message);
        throw error;
      }
    },
  });
  return { isLoading, data, error };
}
