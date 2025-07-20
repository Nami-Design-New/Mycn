import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import axiosInstance from "../../utils/axiosInstance";

export default function useGetExpectedPackages() {
  const { lang } = useSelector((state) => state.settings);

  const { isLoading, data, error } = useQuery({
    queryKey: ["expected-packages", lang],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get("/profile/expectedPackages");
        if (res.data.code === 200) {
          return res.data.data || {};
        }
      } catch (error) {
        console.error("Error fetching notifications:", error.message);
        throw error;
      }
    },
  });
  return { isLoading, data, error };
}
