import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import { createTaskItem } from "../services/taskItemService";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = async (itemName, itemDueDate) => {
    const serverItem = await createTaskItem(itemName, itemDueDate);
    const newTodoItems = [...todoItems, serverItem];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemId) => {
    setTodoItems(todoItems.filter((item) => item.id !== todoItemId));
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-4xl rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-2xl shadow-slate-200/70 backdrop-blur-xl sm:p-10">
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
              : `You have ${todoItems.length} active ${todoItems.length === 1 ? "task" : "tasks"}.`}
          </p>
        </div>
        <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
      </div>
    </div>
  );
}

export default App;
