function TodoItem({id, item, onDeleteClick }) {
  return (
    <div className="flex flex-col gap-4 rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/50 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
        <p className="mt-1 text-sm text-slate-500">
          Due: {new Date(item.dueDate).toLocaleDateString()}
        </p>
      </div>
      <button
        type="button"
        onClick={() => onDeleteClick(id)}
        className="rounded-2xl border border-rose-200 bg-rose-50 px-5 py-3 text-sm font-semibold text-rose-700 transition hover:bg-rose-100 focus:outline-none focus:ring-2 focus:ring-rose-200"
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
