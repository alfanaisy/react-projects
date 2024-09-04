import { Todo } from '../pages/todo.page';

interface TodoItemProps {
  todo: Todo;
  handleCompleteTodo: (id: string) => void;
}

const TodoItem = ({ todo, handleCompleteTodo }: TodoItemProps) => {
  return (
    <div
      className={`w-full min-h-8 flex flex-col border-2 ${
        todo.isComplete ? 'border-green-700' : 'border-red-600'
      } rounded-md px-4 py-2 text-white cursor-pointer`}
      onClick={() => handleCompleteTodo(todo.id)}
    >
      <div className="flex justify-between">
        <h3 className={`font-bold ${todo.isComplete ? 'line-through' : ''}`}>
          {todo.title}
        </h3>
        <p className={`text-sm ${todo.isComplete ? 'line-through' : ''}`}>
          {todo.date}
        </p>
      </div>
      <p className="capitalize">{todo.priority}</p>
    </div>
  );
};

export default TodoItem;
