export const createTaskItem = async (taskName, date) => {
  try {
    const response = await fetch("http://localhost:1101/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ taskName, date }),
    });
    const item = await response.json();
    return mapTaskItem(item);
  } catch (error) {
    console.error("Error creating task item:", error);
    throw error;
  }
};

const mapTaskItem = (serverTaskItem) => {
  return {
    id: serverTaskItem._id,
    name: serverTaskItem.taskName,
    dueDate: serverTaskItem.date,
    completed: serverTaskItem.completed,
  };
};
