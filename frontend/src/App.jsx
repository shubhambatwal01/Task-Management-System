import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import WelcomeMsg from "./components/WelcomeMsg";
import TodoItemsContextProvider from "./store/todo-items-store";

function App() {
  return (
    <TodoItemsContextProvider>
      <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(125,211,252,0.22),_transparent_55%),linear-gradient(135deg,_#f8fafc_0%,_#eef2ff_100%)] px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col gap-5 rounded-[2rem] border border-white/70 bg-white/80 p-4 shadow-[0_25px_80px_-20px_rgba(15,23,42,0.25)] backdrop-blur-xl sm:p-7 lg:p-8">
          <AppName />
          <AddTodo />
          <WelcomeMsg />
          <TodoItems />
        </div>
      </div>
    </TodoItemsContextProvider>
  );
}

export default App;
