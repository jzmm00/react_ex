import { useState, useRef } from "react";

const TodoEditor = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState("");
  const [showError, setShowError] = useState(false);
  const inputRef = useRef();

  const onChangeInput = (e) => {
    setInputValue(e.target.value);
    setShowError(false);
  };

  const onSubmitTodo = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) {
      setShowError(true);
      inputRef.current.focus();
      return;
    }
    onAddTodo(trimmed);
    setInputValue("");
  };

  return (
    <div id="editor">
      <h2>새로운 할 일 작성하기</h2>
      <div className="edit-box">
        <input
          type="text"
          value={inputValue}
          onChange={onChangeInput}
          ref={inputRef}
          placeholder="새 할 일 입력"
        />
        <button onClick={onSubmitTodo}>추가</button>
        {showError && <p className="error">할 일을 입력해주세요.</p>}
      </div>
    </div>
  );
};

export default TodoEditor;
