import apiClient from "./apiClient";

export const getLeadershipMembers = async () => {
  try {
    const response = await apiClient.get("/leadership");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAdminLeadershipMembers = async () => {
  try {
    const response = await apiClient.get(
      "/leadership/admin/all"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createLeadershipMember = async (data) => {
  try {
    const response = await apiClient.post(
      "/leadership",
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateLeadershipMember = async (
  id,
  data
) => {
  try {
    const response = await apiClient.put(
      `/leadership/${id}`,
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteLeadershipMember = async (
  id
) => {
  try {
    const response = await apiClient.delete(
      `/leadership/${id}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};