// src/hooks/profile/useGetGeneratePayTransaction.js
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../utils/axiosInstance";

export default function useGetGeneratePayTransaction() {
  return useMutation({
    mutationFn: async (id) => {
      const { data } = await axiosInstance.get(`/generatePayTransaction/${id}`);
      return data;
    },
  });
}
