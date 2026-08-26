import { api } from "./apiConfig";

const TOKEN_KEY = "taskManagerToken";

export const registerUser = async ({ name, email, password }) => {
  const response = await api.post("/api/auth/register", {
    name,
    email,
    password,
  });

  return response.data;
};

export const loginUser = async ({ email, password }) => {
  const response = await api.post("/api/auth/login", {
    email,
    password,
  });

  return response.data;
};

export const getCurrentUser = async () => {
  const response = await api.get("/api/auth/me");
  return response.data;
};

export const saveToken = (token) => localStorage.setItem(TOKEN_KEY, token);
export const clearToken = () => localStorage.removeItem(TOKEN_KEY);
export const hasToken = () => Boolean(localStorage.getItem(TOKEN_KEY));
