import apiClient from "./apiClient";

export const createEnquiry = async (data) => {
  const res = await apiClient.post("/enquiry", data);
  return res.data;
};