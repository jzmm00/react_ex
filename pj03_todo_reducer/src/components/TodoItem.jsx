import { useState } from "react";

const TodoItem = ({ todo, toggleTodo, updateTodo, removeTodo }) => {
  const [editText, setEditText] = useState(todo.content);
  const [isEditing, setIsEditing] = useState(false);

  const formattedDate = new Date(todo.createdDate).toLocaleDateString();

  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  const handleChangeText = (e) => {
    setEditText(e.target.value);
  };

  const openEdit = () => {
    setEditText(todo.content);
    setIsEditing(true);
  };

  const saveEdit = () => {
    updateTodo(todo.id, editText.trim());
    setIsEditing(false);
  };

  const deleteTodo = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      removeTodo(todo.id);
    }
  };

  return (
    <li className={todo.isDone ? "done" : ""}>
      <div className="left">
        <p className="check">
          <input
            type="checkbox"
            checked={todo.isDone}
            onChange={handleToggle}
          />
        </p>
        <div className="content">
          {isEditing ? (
            <div className="EditForm">
              <input
                type="text"
                value={editText}
                onChange={handleChangeText}
              />
              <button onClick={saveEdit}>저장</button>
            </div>
          ) : (
            todo.content
          )}
        </div>
      </div>
      <div className="right">
        <p className="date">{formattedDate}</p>
        <p className="update">
          <button onClick={openEdit}>수정</button>
        </p>
        <p className="remove">
          <button onClick={deleteTodo}>삭제</button>
        </p>
      </div>
    </li>
  );
};

export default TodoItem;
