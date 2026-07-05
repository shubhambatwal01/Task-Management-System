import { useContext, useRef } from "react";
import { IoAdd } from "react-icons/io5";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  const {addNewItem} = useContext(TodoItemsContext);
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItem(todoName, dueDate);
  };

  return (
    <div className="container">
      <form
        onSubmit={handleAddButtonClicked}
      >
        <div className="col-4">
          <input type="text" placeholder="Enter task here" ref={todoNameElement} />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button
            type="submit"
          >
            <IoAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
