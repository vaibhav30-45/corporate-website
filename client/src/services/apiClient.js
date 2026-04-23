import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

// Request Interceptor → token automatically attach karega
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// Response Interceptor → centralized error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      return Promise.reject({
        error: error.response.data?.error || "Server error",
      });
    } 
    else if (error.request) {
      return Promise.reject({
        error: "Server not responding",
      });
    } 
    else {
      return Promise.reject({
        error: "Something went wrong",
      });
    }
  }
);

export default apiClient;