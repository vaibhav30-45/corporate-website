import axios from "axios";

const API = `${import.meta.env.VITE_API_BASE_URL}/career`;

const getToken = () => localStorage.getItem("token");

export const getJobsAdmin = () => {
  return axios.get(`${API}/admin/all`, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
};

export const createJob = (data) => {
  return axios.post(API, data, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
};

export const updateJob = (id, data) => {
  return axios.put(`${API}/${id}`, data, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
};

export const deleteJob = (id) => {
  return axios.delete(`${API}/${id}`, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
};
