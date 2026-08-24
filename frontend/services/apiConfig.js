const ApiUrl =
  "http://localhost:1101" || "https://task-management-system-j8da.onrender.com";

export const API_BASE_URL = ApiUrl.replace(/\/+$/, "");

export const getToken = () => localStorage.getItem("taskManagerToken");

export const authHeaders = () => {
  const token = getToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const readJson = async (response) => {
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const error = new Error(data.message || "Something went wrong");
    error.status = response.status;
    throw error;
  }

  return data;
};
