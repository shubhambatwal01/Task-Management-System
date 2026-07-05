import { useContext, useState } from "react";
import { IoAdd } from "react-icons/io5";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const trimmedName = todoName.trim();

    if (!trimmedName) {
      setErrorMessage("Please enter a task before adding it.");
      return;
    }

    addNewItem(trimmedName, dueDate || "No deadline");
    setTodoName("");
    setDueDate("");
    setErrorMessage("");
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 shadow-sm sm:p-5">
      <form
        className="flex flex-col gap-3 sm:flex-row"
        onSubmit={handleAddButtonClicked}
      >
        <input
          type="text"
          placeholder="What needs to be done?"
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
          className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-0 transition focus:border-sky-400"
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-400"
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-xl bg-sky-600 px-4 py-3 text-white transition hover:bg-sky-700"
        >
          <IoAdd className="text-xl" />
        </button>
      </form>
      {errorMessage ? (
        <p className="mt-2 text-sm text-rose-600">{errorMessage}</p>
      ) : null}
    </div>
  );
}

export default AddTodo;