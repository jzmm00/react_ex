import { createContext, useState, useContext } from 'react';

const initialTodos = [
  {
    id: 2,
    content: '영단어 외우기',
    createdDate: new Date(2025, 8, 26).getTime(),
    isDone: false

  },
  {
    id: 1,
    content: '청소하기',
    createdDate: new Date(2025, 7, 25).getTime(),
    isDone: false

  },
  {
    id: 0,
    content: '서점방문',
    createdDate: new Date(2025, 7, 24).getTime(),
    isDone: false

  },
];

const TodoContext = createContext();

export function TodoProvider({ children }) {

  const [todos, setTodos] = useState(initialTodos);


  const addTodo = (content) => {
    const now = Date.now();
    const newTodo = {
      id: now,
      content,
      createdDate: now,
      isDone: false
    };
    setTodos(prev => [newTodo, ...prev]);
  };

  const toggleTodo = (id) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id
          ? { ...todo, isDone: !todo.isDone }
          : todo
      ));
  };

  const updateTodo = (id, content) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id
          ? { ...todo, content }
          : todo
      ));
  };

  const removeTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, updateTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

// Context 사용 훅
export function useTodo() {
  return useContext(TodoContext);
}
