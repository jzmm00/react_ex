import { useState } from "react";
import { TodoTop, TodoEditor, TodoList } from "./components";
import "./App.css";

const initialTodos = [
  { id: 2, content: "영단어 외우기", createdDate: new Date(2025, 8, 26).getTime(), isDone: false },
  { id: 1, content: "청소하기",     createdDate: new Date(2025, 7, 25).getTime(), isDone: false },
  { id: 0, content: "서점방문",     createdDate: new Date(2025, 7, 24).getTime(), isDone: false },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const handleAddTodo = (content) => {
    const timestamp = Date.now();
    const newTodo = {
      id: timestamp,
      content,
      createdDate: timestamp,
      isDone: false,
    };
    setTodos(prev => [newTodo, ...prev]);
  };

  const handleToggleTodo = (id) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id
          ? { ...todo, isDone: !todo.isDone }
          : todo
      )
    );
  };

  const handleUpdateTodoText = (id, newText) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id
          ? { ...todo, content: newText }
          : todo
      )
    );
  };

  const handleRemoveTodo = (id) => {
    setTodos(prev =>
      prev.filter(todo => todo.id !== id)
    );
  };

  return (
    <div id="wrapper">
      <TodoTop />
      <TodoEditor onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onToggleTodo={handleToggleTodo}
        onUpdateTodoText={handleUpdateTodoText}
        onRemoveTodo={handleRemoveTodo}
      />
    </div>
  );
}

export default App;
