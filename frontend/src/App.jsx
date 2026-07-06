import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import { useEffect, useState } from "react";
import {
  addItemToServer,
  deleteItemFromServer,
  getItemsFromServer,
  markItemCompletedOnServer,
} from "../services/taskItemService";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    getItemsFromServer().then((initialItems) => {
      setTodoItems(initialItems);
    });
  }, []);

  const handleNewItem = async (itemName, itemDueDate) => {
    const serverItem = await addItemToServer(itemName, itemDueDate);
    const newTodoItems = [...todoItems, serverItem];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = async (id) => {
    const deletedId = await deleteItemFromServer(id);
    const newTaskItems = todoItems.filter((item) => item.id !== deletedId);
    setTodoItems(newTaskItems);
  };

  const handleCompleteItem = async (id) => {
    await markItemCompletedOnServer(id);
    const updatedItems = todoItems.map((item) =>
      item.id === id ? { ...item, completed: true } : item,
    );
    setTodoItems(updatedItems);
  };

  const activeTasks = todoItems.filter((item) => !item.completed);
  const completedTasks = todoItems.filter((item) => item.completed);

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-4xl rounded-2rem border border-slate-200 bg-white/90 p-6 shadow-2xl shadow-slate-200/70 backdrop-blur-xl sm:p-10">
        <AppName />
        <AddTodo onNewItem={handleNewItem} />

        <div className="mt-6 rounded-3xl bg-slate-100/80 p-5 text-center text-slate-600 shadow-inner shadow-slate-200/80 sm:p-6">
          <p className="text-sm font-medium tracking-[0.18em] uppercase text-slate-500">
            {todoItems.length === 0
              ? "Start a new habit today"
              : "Task overview"}
          </p>
          <p className="mt-2 text-xl font-semibold text-slate-900">
            {todoItems.length === 0
              ? "No tasks yet. Add a task to stay productive."
              : `You have ${activeTasks.length} active ${activeTasks.length === 1 ? "task" : "tasks"} and ${completedTasks.length} completed.`}
          </p>
        </div>
        <TodoItems
          todoItems={todoItems}
          onDeleteClick={handleDeleteItem}
          onCompleteClick={handleCompleteItem}
        />
      </div>
    </div>
  );
}

export default App;
