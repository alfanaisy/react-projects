import { useTodoStore } from '../store/todo.store';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);

  return (
    <div>
      <h3 className="font-bold text-xl mb-3">Todo List</h3>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
