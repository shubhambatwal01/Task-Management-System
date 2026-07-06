function TodoItem({ id, item, onDeleteClick, onCompleteClick }) {
  const isCompleted = Boolean(item.completed);

  return (
    <div className="flex flex-col gap-4 rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/50 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h3
          className={`text-lg font-semibold ${isCompleted ? "text-slate-900 line-through" : "text-slate-900"}`}
        >
          {item.name}
        </h3>
        <p
          className={`mt-1 text-sm ${isCompleted ? "text-slate-500" : "text-slate-500"}`}
        >
          Due:{" "}
          {item.dueDate
            ? new Date(item.dueDate).toLocaleDateString()
            : "No due date"}
        </p>
      </div>
      <div className="flex flex-wrap gap-4">
        <button
          type="button"
          onClick={() => onDeleteClick(id)}
          className="rounded-2xl border border-rose-200 bg-rose-50 px-5 py-3 text-sm font-semibold text-rose-700 transition hover:bg-rose-100 focus:outline-none focus:ring-2 focus:ring-rose-200"
        >
          Delete
        </button>
        <button
          type="button"
          onClick={() => onCompleteClick(id)}
          className={`rounded-2xl px-6 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 ${
            isCompleted
              ? "bg-emerald-600 text-white focus:ring-emerald-200"
              : "bg-linear-to-r from-indigo-600 to-sky-500 text-white hover:opacity-95 focus:ring-indigo-400"
          }`}
        >
          {isCompleted ? "Completed" : "Complete"}
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
