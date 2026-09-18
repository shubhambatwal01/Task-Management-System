import { CalendarDays, Check, CheckCircle2, Trash2 } from "lucide-react";

function TodoItem({ id, item, onDeleteClick, onCompleteClick }) {
  const isCompleted = Boolean(item.completed);

  const formattedDate = item.dueDate
    ? new Date(item.dueDate).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "No due date";

  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border p-4 transition-all duration-300 sm:p-5 ${
        isCompleted
          ? "border-emerald-200 bg-emerald-50/50 shadow-sm"
          : "border-slate-200 bg-white shadow-sm hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg hover:shadow-slate-200/60"
      }`}
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex min-w-0 items-start gap-3 sm:w-full sm:items-center">
          <div
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl transition-colors ${
              isCompleted
                ? "bg-emerald-100 text-emerald-600"
                : "bg-indigo-50 text-indigo-600"
            }`}
          >
            {isCompleted ? (
              <CheckCircle2 size={22} strokeWidth={2.2} />
            ) : (
              <Check size={22} strokeWidth={2.2} />
            )}
          </div>

          <div className="min-w-0 flex-1">
            <h3
              className={`wrap-break-words text-base font-semibold leading-snug sm:text-lg ${
                isCompleted
                  ? "text-slate-500 line-through decoration-slate-400"
                  : "text-slate-900"
              }`}
            >
              {item.name}
            </h3>

            <div className="mt-2 flex items-center gap-1.5 text-xs font-medium text-slate-500 sm:text-sm">
              <CalendarDays size={15} className="shrink-0" />

              <span>Due:</span>

              <span
                className={isCompleted ? "text-slate-400" : "text-slate-600"}
              >
                {formattedDate}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onDeleteClick(id)}
            aria-label={`Delete ${item.name}`}
            title="Delete task"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-rose-200 bg-rose-50 text-rose-600 transition-all duration-200 hover:border-rose-300 hover:bg-rose-100 hover:text-rose-700 active:scale-95 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:ring-offset-2 sm:ml-auto sm:w-12"
          >
            <Trash2 size={19} />
          </button>

          <button
            type="button"
            onClick={() => onCompleteClick(id)}
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-200 active:scale-95 focus:outline-none focus:ring-offset-2 sm:ml-2 sm:w-12 ${
              isCompleted
                ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200 focus:ring-emerald-300"
                : "bg-linear-to-r from-indigo-600 to-sky-500 text-white shadow-sm shadow-indigo-200 hover:shadow-md hover:shadow-indigo-200 focus:ring-indigo-300"
            }`}
          >
            {isCompleted ? (
              <>
                <span>Completed</span>
              </>
            ) : (
              <>
                <Check size={18} />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
