import axios from "axios";

const defaultApiUrl = import.meta.env.DEV
  ? "http://localhost:1101"
  : "https://task-management-system-37rn.onrender.com";

export const API_BASE_URL = (
  import.meta.env.VITE_API_URL || defaultApiUrl
).replace(/\/+$/, "");

const TOKEN_KEY = "taskManagerToken";

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const normalizedError = new Error(
      error.response?.data?.message || error.message || "Something went wrong",
    );
    normalizedError.status = error.response?.status;
    return Promise.reject(normalizedError);
  },
);
