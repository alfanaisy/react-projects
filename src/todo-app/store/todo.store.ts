import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export interface Todo {
  id: string;
  title: string;
  date: string;
  priority: 'low' | 'medium' | 'high';
  isComplete: boolean;
}

interface TodoStore {
  todos: Todo[];
  addTodo: (
    title: string,
    date: string,
    priority: 'low' | 'medium' | 'high'
  ) => void;
  completeTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

export const useTodoStore = create<TodoStore>()(
  persist(
    (set) => ({
      todos: [],
      addTodo(title, date, priority) {
        set((state) => {
          return {
            todos: [
              ...state.todos,
              {
                id: crypto.randomUUID(),
                title,
                date,
                priority,
                isComplete: false,
              },
            ],
          };
        });
      },
      completeTodo(id) {
        set((state) => {
          return {
            todos: state.todos.map((todo) => {
              if (todo.id === id) {
                return { ...todo, isComplete: !todo.isComplete };
              }
              return todo;
            }),
          };
        });
      },
      deleteTodo(id) {
        set((state) => {
          return {
            todos: state.todos.filter((todo) => todo.id !== id),
          };
        });
      },
    }),
    {
      name: 'todos',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
