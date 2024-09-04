import { Todo } from '../store/todo.store';
import { useTodoStore } from '../store/todo.store';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const completeTodo = useTodoStore((state) => state.completeTodo);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);

  const priorityColorMap: Record<Todo['priority'], string> = {
    low: 'text-green-500',
    medium: 'text-yellow-500',
    high: 'text-red-500',
  };

  return (
    <div
      className={`w-full min-h-8 flex flex-col border-2 ${
        todo.isComplete ? 'border-green-700' : 'border-red-600'
      } rounded-md px-4 py-2 text-white `}
    >
      <div className="flex justify-between cursor-pointer">
        <h3 className={`font-bold ${todo.isComplete ? 'line-through' : ''}`}>
          {todo.title}
        </h3>
        <p className={`text-sm ${todo.isComplete ? 'line-through' : ''}`}>
          {todo.date}
        </p>
      </div>
      <p className={`capitalize ${priorityColorMap[todo.priority]}`}>
        {todo.priority}
      </p>
      <div className="self-end space-x-2">
        <button
          className="text-green-600 border-[1px] border-green-500 py-1 rounded-md mt-4 w-32 disabled:cursor-not-allowed"
          onClick={() => completeTodo(todo.id)}
          disabled={todo.isComplete}
        >
          Mark as Done
        </button>
        <button
          className="text-red-600 border-[1px] border-red-500 py-1 rounded-md mt-4 w-24 self-end"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
