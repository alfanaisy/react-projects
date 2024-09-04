import { Todo } from '../store/todo.store';
import { useTodoStore } from '../store/todo.store';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const completeTodo = useTodoStore((state) => state.completeTodo);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);

  return (
    <div
      className={`w-full min-h-8 flex flex-col border-2 ${
        todo.isComplete ? 'border-green-700' : 'border-red-600'
      } rounded-md px-4 py-2 text-white `}
    >
      <div
        className="flex justify-between cursor-pointer"
        onClick={() => completeTodo(todo.id)}
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
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
