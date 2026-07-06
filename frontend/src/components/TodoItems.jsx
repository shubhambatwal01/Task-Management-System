import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className="mt-8 space-y-4">
      {todoItems.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          item={item}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
};

export default TodoItems;
