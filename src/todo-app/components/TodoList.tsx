import { useEffect, useState } from 'react';
import { Todo, useTodoStore } from '../store/todo.store';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todosFetched = useTodoStore((state) => state.todos);

  const [todos, setTodos] = useState<Todo[]>(todosFetched);
  const [filter, setFilter] = useState<'all' | 'complete' | 'incomplete'>(
    'all'
  );

  useEffect(() => {
    if (filter === 'complete') {
      setTodos(todosFetched.filter((todo) => todo.isComplete));
    } else if (filter === 'incomplete') {
      setTodos(todosFetched.filter((todo) => !todo.isComplete));
    } else {
      setTodos(todosFetched);
    }
  }, [filter, todosFetched]);

  return (
    <div>
      <div className="flex justify-between mb-2">
        <h3 className="font-bold text-xl mb-3">Todo List</h3>
        <select
          name="filter"
          className="w-32 bg-white text-black rounded-md px-1"
          onChange={(e) => {
            setFilter(e.target.value as 'all' | 'complete' | 'incomplete');
          }}
        >
          <option value="all">All</option>
          <option value="complete">Complete</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
      {todos.length < 1 && <p>No data.</p>}
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
