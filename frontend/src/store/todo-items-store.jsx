import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const todoItemsReducer = (currTodoItems, action) => {
  if (action.type === "NEW_ITEM") {
    return [
      ...currTodoItems,
      {
        id: action.payload.itemId,
        name: action.payload.itemName,
        dueDate: action.payload.itemDueDate,
      },
    ];
  }

  if (action.type === "DELETE_ITEM") {
    return currTodoItems.filter((item) => item.id !== action.payload.itemId);
  }

  return currTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemId: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (todoItemId) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemId: todoItemId,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };

  return (
    <TodoItemsContext.Provider value={{ todoItems, addNewItem, deleteItem }}>
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;