import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const WelcomeMsg = () => {
  const { todoItems } = useContext(TodoItemsContext);

  if (todoItems.length > 0) {
    return null;
  }

  return (
    <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-4 py-6 text-center text-slate-500">
      <p className="text-lg font-semibold text-slate-700">
        Your plan is looking empty.
      </p>
      <p className="mt-1 text-sm">Add your first task and make today count.</p>
    </div>
  );
};

export default WelcomeMsg;
