import { useState } from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

export interface Todo {
  id: string;
  title: string;
  date: string;
  priority: 'low' | 'medium' | 'high';
  isComplete: boolean;
}

const TodoPage = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const handleAddTodo = (
    title: string,
    date: string,
    priority: 'low' | 'medium' | 'high'
  ) => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      date,
      priority,
      isComplete: false,
    };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const handleCompleteTodo = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isComplete: !todo.isComplete };
      }
      return todo;
    });
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  return (
    <div className="min-h-screen bg-slate-800 text-white flex justify-around px-2 py-4 gap-2">
      <div className="flex flex-col w-2/5 border-cyan-600 border-2 rounded-md px-4 py-6">
        <h1 className="inline-block font-bold text-2xl text-center mb-2">
          Todo App
        </h1>
        <TodoForm handleSubmit={handleAddTodo} />
      </div>
      <div className="flex flex-col w-3/5 border-cyan-600 border-2 rounded-md px-4 py-6">
        <TodoList todos={todos} handleCompleteTodo={handleCompleteTodo} />
      </div>
    </div>
  );
};

export default TodoPage;
