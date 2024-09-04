import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

const TodoPage = () => {
  return (
    <div className="min-h-screen bg-slate-800 text-white flex justify-around px-2 py-4 gap-2">
      <div className="flex flex-col w-2/5 border-cyan-600 border-2 rounded-md px-4 py-6">
        <h1 className="inline-block font-bold text-2xl text-center mb-2">
          Todo App
        </h1>
        <TodoForm />
      </div>
      <div className="flex flex-col w-3/5 border-cyan-600 border-2 rounded-md px-4 py-6">
        <TodoList />
      </div>
    </div>
  );
};

export default TodoPage;
