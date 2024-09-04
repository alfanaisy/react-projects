import { Todo } from '../pages/todo.page';

interface TodoItemProps {
  todo: Todo;
  handleCompleteTodo: (id: string) => void;
  handleDeleteTodo: (id: string) => void;
}

const TodoItem = ({
  todo,
  handleCompleteTodo,
  handleDeleteTodo,
}: TodoItemProps) => {
  return (
    <div
      className={`w-full min-h-8 flex flex-col border-2 ${
        todo.isComplete ? 'border-green-700' : 'border-red-600'
      } rounded-md px-4 py-2 text-white `}
    >
      <div
        className="flex justify-between cursor-pointer"
        onClick={() => handleCompleteTodo(todo.id)}
      >
        <h3 className={`font-bold ${todo.isComplete ? 'line-through' : ''}`}>
          {todo.title}
        </h3>
        <p className={`text-sm ${todo.isComplete ? 'line-through' : ''}`}>
          {todo.date}
        </p>
      </div>
      <p className="capitalize">{todo.priority}</p>
      <button
        className="text-red-600 border-[1px] border-red-500 py-1 rounded-md mt-4 w-24 self-end"
        onClick={() => handleDeleteTodo(todo.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
