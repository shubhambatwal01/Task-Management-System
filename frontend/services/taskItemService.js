export const addItemToServer = async (taskName, date) => {
  try {
    const response = await fetch(
      "https://task-management-system-j8da.onrender.com/api/tasks",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ taskName, date }),
      },
    );
    const item = await response.json();
    return mapTaskItem(item);
  } catch (error) {
    console.error("Error creating task item:", error);
    throw error;
  }
};

export const getItemsFromServer = async () => {
  const response = await fetch(
    "https://task-management-system-j8da.onrender.com/api/tasks",
  );
  const items = await response.json();
  return items.map(mapTaskItem);
};

export const markItemCompletedOnServer = async (id) => {
  const response = await fetch(
    `https://task-management-system-j8da.onrender.com/api/tasks/${id}/completed`,
    {
      method: "PUT",
    },
  );
  const item = await response.json();
  return mapTaskItem(item);
};

export const deleteItemFromServer = async (id) => {
  await fetch(
    `https://task-management-system-j8da.onrender.com/api/tasks/${id}`,
    {
      method: "DELETE",
    },
  );
  return id;
};

const mapTaskItem = (serverTaskItem) => {
  return {
    id: serverTaskItem._id,
    name: serverTaskItem.taskName,
    dueDate: serverTaskItem.date,
    completed: serverTaskItem.completed,
  };
};
