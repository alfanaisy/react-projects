import { Todo } from '../pages/todo.page';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  handleCompleteTodo: (id: string) => void;
  handleDeleteTodo: (id: string) => void;
}

const TodoList = ({
  todos,
  handleCompleteTodo,
  handleDeleteTodo,
}: TodoListProps) => {
  return (
    <div>
      <h3 className="font-bold text-xl mb-3">Todo List</h3>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem
              todo={todo}
              handleCompleteTodo={handleCompleteTodo}
              handleDeleteTodo={handleDeleteTodo}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
