import { API_BASE_URL, authHeaders, readJson } from "./apiConfig";

export const addItemToServer = async (taskName, date) => {
  const response = await fetch(`${API_BASE_URL}/api/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...authHeaders(),
    },
    body: JSON.stringify({ taskName, date }),
  });

  const item = await readJson(response);
  return mapTaskItem(item);
};

export const getItemsFromServer = async () => {
  const response = await fetch(`${API_BASE_URL}/api/tasks`, {
    headers: authHeaders(),
  });
  const items = await readJson(response);
  return items.map(mapTaskItem);
};

export const markItemCompletedOnServer = async (id) => {
  const response = await fetch(`${API_BASE_URL}/api/tasks/${id}/completed`, {
    method: "PUT",
    headers: authHeaders(),
  });
  const item = await readJson(response);
  return mapTaskItem(item);
};

export const deleteItemFromServer = async (id) => {
  const response = await fetch(`${API_BASE_URL}/api/tasks/${id}`, {
    method: "DELETE",
    headers: authHeaders(),
  });
  await readJson(response);
  return id;
};

const mapTaskItem = (serverTaskItem) => ({
  id: serverTaskItem._id,
  name: serverTaskItem.taskName,
  dueDate: serverTaskItem.date,
  completed: serverTaskItem.completed,
});
