import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";

function TodoItem({ todoId, todoName, todoDate }) {
  const { deleteItem } = useContext(TodoItemsContext);

  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
      <div className="min-w-0">
        <p className="truncate font-semibold text-slate-800">{todoName}</p>
        <p className="text-sm text-slate-500">{todoDate}</p>
      </div>
      <button
        type="button"
        className="rounded-full p-2 text-rose-500 transition hover:bg-rose-50 hover:text-rose-600"
        onClick={() => deleteItem(todoId)}
        aria-label={`Delete ${todoName}`}
      >
        <MdDelete className="text-xl" />
      </button>
    </div>
  );
}

export default TodoItem;
