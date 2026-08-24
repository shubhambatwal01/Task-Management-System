import { API_BASE_URL, authHeaders, readJson } from "./apiConfig";

const TOKEN_KEY = "taskManagerToken";

export const registerUser = async ({ name, email, password }) => {
  const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });

  return readJson(response);
};

export const loginUser = async ({ email, password }) => {
  const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  return readJson(response);
};

export const getCurrentUser = async () => {
  const response = await fetch(`${API_BASE_URL}/api/auth/me`, {
    headers: authHeaders(),
  });

  return readJson(response);
};

export const saveToken = (token) => localStorage.setItem(TOKEN_KEY, token);
export const clearToken = () => localStorage.removeItem(TOKEN_KEY);
export const hasToken = () => Boolean(localStorage.getItem(TOKEN_KEY));
