import { useCallback, useEffect, useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import AuthForm from "./components/AuthForm";
import {
  addItemToServer,
  deleteItemFromServer,
  getItemsFromServer,
  markItemCompletedOnServer,
} from "../services/taskItemService";
import {
  clearToken,
  getCurrentUser,
  hasToken,
  loginUser,
  registerUser,
  saveToken,
} from "../services/authService";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const [user, setUser] = useState(null);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [taskError, setTaskError] = useState("");

  const handleLogout = useCallback(() => {
    clearToken();
    setUser(null);
    setTodoItems([]);
    setTaskError("");
  }, []);

  useEffect(() => {
    const restoreSession = async () => {
      if (!hasToken()) {
        setCheckingAuth(false);
        return;
      }

      try {
        const data = await getCurrentUser();
        setUser(data.user);
      } catch {
        clearToken();
      } finally {
        setCheckingAuth(false);
      }
    };

    restoreSession();
  }, []);

  useEffect(() => {
    if (!user) {
      setTodoItems([]);
      return;
    }

    const loadTasks = async () => {
      try {
        setTaskError("");
        const initialItems = await getItemsFromServer();
        setTodoItems(initialItems);
      } catch (error) {
        if (error.status === 401) {
          handleLogout();
          return;
        }
        setTaskError(error.message);
      }
    };

    loadTasks();
  }, [user, handleLogout]);

  const finishAuth = ({ token, user: authenticatedUser }) => {
    saveToken(token);
    setUser(authenticatedUser);
  };

  const handleLogin = async (credentials) => {
    const data = await loginUser(credentials);
    finishAuth(data);
  };

  const handleRegister = async (details) => {
    const data = await registerUser(details);
    finishAuth(data);
  };

  const handleNewItem = async (itemName, itemDueDate) => {
    try {
      setTaskError("");
      const serverItem = await addItemToServer(itemName, itemDueDate);
      setTodoItems((currentItems) => [serverItem, ...currentItems]);
    } catch (error) {
      if (error.status === 401) return handleLogout();
      setTaskError(error.message);
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      setTaskError("");
      const deletedId = await deleteItemFromServer(id);
      setTodoItems((currentItems) =>
        currentItems.filter((item) => item.id !== deletedId),
      );
    } catch (error) {
      if (error.status === 401) return handleLogout();
      setTaskError(error.message);
    }
  };

  const handleCompleteItem = async (id) => {
    try {
      setTaskError("");
      const updatedItem = await markItemCompletedOnServer(id);
      setTodoItems((currentItems) =>
        currentItems.map((item) => (item.id === id ? updatedItem : item)),
      );
    } catch (error) {
      if (error.status === 401) return handleLogout();
      setTaskError(error.message);
    }
  };

  if (checkingAuth) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 text-slate-600">
        Checking your session...
      </div>
    );
  }

  if (!user) {
    return <AuthForm onLogin={handleLogin} onRegister={handleRegister} />;
  }

  const activeTasks = todoItems.filter((item) => !item.completed);
  const completedTasks = todoItems.filter((item) => item.completed);

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-4xl rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-2xl shadow-slate-200/70 backdrop-blur-xl sm:p-10">
        <div className="mb-8 flex flex-col gap-3 rounded-2xl bg-slate-50 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
              Signed in as
            </p>
            <p className="mt-1 font-semibold text-slate-900">{user.name}</p>
            <p className="text-sm text-slate-500">{user.email}</p>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Logout
          </button>
        </div>

        <AppName />
        <AddTodo onNewItem={handleNewItem} />

        {taskError && (
          <p className="mt-4 rounded-2xl bg-rose-50 px-4 py-3 text-sm text-rose-700">
            {taskError}
          </p>
        )}

        <div className="mt-6 rounded-3xl bg-slate-100/80 p-5 text-center text-slate-600 shadow-inner shadow-slate-200/80 sm:p-6">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
            {todoItems.length === 0 ? "Start a new habit today" : "Task overview"}
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
