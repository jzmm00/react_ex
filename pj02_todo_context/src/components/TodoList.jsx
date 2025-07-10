import { useState } from "react";
import { useTodo } from "../context";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = useTodo();
  const [searchKeyword, setSearchKeyword] = useState("");

  const filteredTodos = searchKeyword
    ? todos.filter(t =>
      t.content.toLowerCase().includes(searchKeyword.toLowerCase())
    )
    : todos;

  return (
    <div id="todo_list">
      <h2>할 일 목록</h2>
      <div className="search">
        <input
          type="text"
          placeholder="검색..."
          value={searchKeyword}
          onChange={e => setSearchKeyword(e.target.value)}
        />
      </div>
      <div className="todo-list">
        <ul>
          {filteredTodos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
