import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [error, setError] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
    if (error) setError("");
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    const trimmedName = todoName.trim();
    if (!trimmedName) {
      setError("Please enter a task name.");
      return;
    }

    onNewItem(trimmedName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm shadow-slate-200/60 sm:p-6">
      <div className="grid gap-4 sm:grid-cols-[1.7fr_1fr_auto]">
        <label className="sr-only" htmlFor="taskName">
          Task name
        </label>
        <input
          id="taskName"
          type="text"
          placeholder="Enter your task"
          value={todoName}
          onChange={handleNameChange}
          className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        />

        <label className="sr-only" htmlFor="dueDate">
          Due date
        </label>
        <input
          id="dueDate"
          type="date"
          value={dueDate}
          onChange={handleDateChange}
          className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        />

        <button
          type="button"
          onClick={handleAddButtonClicked}
          className="rounded-2xl bg-gradient-to-r from-indigo-600 to-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          Add task
        </button>
      </div>
      {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
    </div>
  );
}

export default AddTodo;
