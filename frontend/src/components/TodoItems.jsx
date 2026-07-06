import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, onDeleteClick, onCompleteClick }) => {
  const incompletedTasks = todoItems.filter((item) => !item.completed);
  const completedTasks = todoItems.filter((item) => item.completed);

  return (
    <>
      {incompletedTasks.length > 0 && (
        <div className="mt-8 space-y-4">
          {incompletedTasks.map((item) => (
            <TodoItem
              key={item.id}
              id={item.id}
              item={item}
              onDeleteClick={onDeleteClick}
              onCompleteClick={onCompleteClick}
            />
          ))}
        </div>
      )}

      {completedTasks.length > 0 && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <h2 className="text-lg font-semibold text-gray-500 mb-3">
            Completed Tasks
          </h2>
          <div className="space-y-3">
            {completedTasks.map((item) => (
              <TodoItem
                key={item.id}
                id={item.id}
                item={item}
                onDeleteClick={onDeleteClick}
                onCompleteClick={onCompleteClick}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default TodoItems;
