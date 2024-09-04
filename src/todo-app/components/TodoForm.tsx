import { useState } from 'react';
import { useTodoStore } from '../store/todo.store';

const TodoForm = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('low');

  const addTodo = useTodoStore((state) => state.addTodo);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTodo(title, date, priority);
    setTitle('');
    setDate('');
    setPriority('low');
    console.log(title, date, priority);
    alert('Todo added successfully!');
  };

  return (
    <form className="space-y-4" onSubmit={handleFormSubmit}>
      <div className="w-full flex flex-col">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          className="w-full border-none outline-none rounded-md px-1 py-1.5 text-slate-950"
          placeholder="Example: Learn React"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="w-full flex flex-col">
        <label htmlFor="date">Due Date</label>
        <input
          type="date"
          name="date"
          min={new Date().toISOString().split('T')[0]}
          className="w-full border-none outline-none rounded-md px-1 py-1.5 text-slate-950"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="w-full flex flex-col">
        <label htmlFor="priority">Priority</label>
        <select
          name="priority"
          className="w-full border-none outline-none rounded-md px-1 py-1.5 text-slate-950"
          value={priority}
          onChange={(e) =>
            setPriority(e.target.value as 'low' | 'medium' | 'high')
          }
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <button className="w-full border-2 border-slate-50 rounded-md px-1 py-1.5 text-white font-bold">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
