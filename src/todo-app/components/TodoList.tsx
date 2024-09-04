import { Todo } from '../pages/todo.page';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  handleCompleteTodo: (id: string) => void;
}

const TodoList = ({ todos, handleCompleteTodo }: TodoListProps) => {
  return (
    <div>
      <h3>Todo List</h3>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem todo={todo} handleCompleteTodo={handleCompleteTodo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
