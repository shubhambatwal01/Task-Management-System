import { api } from "./apiConfig";

export const addItemToServer = async (taskName, date) => {
  const response = await api.post("/api/tasks", { taskName, date });
  return mapTaskItem(response.data);
};

export const getItemsFromServer = async () => {
  const response = await api.get("/api/tasks");
  return response.data.map(mapTaskItem);
};

export const markItemCompletedOnServer = async (id) => {
  const response = await api.put(`/api/tasks/${id}/completed`);
  return mapTaskItem(response.data);
};

export const deleteItemFromServer = async (id) => {
  await api.delete(`/api/tasks/${id}`);
  return id;
};

const mapTaskItem = (serverTaskItem) => ({
  id: serverTaskItem._id,
  name: serverTaskItem.taskName,
  dueDate: serverTaskItem.date,
  completed: serverTaskItem.completed,
});
