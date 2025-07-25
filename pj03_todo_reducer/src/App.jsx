import { useReducer } from "react";
import { TodoTop, TodoEditor, TodoList } from "./components";
import "./App.css";

// 1) 액션 타입 정의
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const UPDATE_TODO = 'UPDATE_TODO';
const REMOVE_TODO = 'REMOVE_TODO';

// 2) 샘플 초기값
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

// 3) 리듀서 함수
function todoReducer(state, action) {
  switch (action.type) {
    case ADD_TODO:
      return [action.payload, ...state];

    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, isDone: !todo.isDone }
          : todo
      );

    case UPDATE_TODO:
      return state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, content: action.payload.content }
          : todo
      );

    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload);

    default:
      return state;
  }
}


function App() {
  // 4) useReducer 사용
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);

  const addTodo = (content) => {
    const timestamp = Date.now();
    dispatch({
      type: ADD_TODO,
      payload: {
        id: timestamp,
        content,
        createdDate: timestamp,
        isDone: false
      }
    });
  };

  const toggleTodo = (id) => {
    dispatch({ type: TOGGLE_TODO, payload: id });
  };

  const updateTodo = (id, content) => {
    dispatch({ type: UPDATE_TODO, payload: { id, content } });
  };

  const removeTodo = (id) => {
    dispatch({ type: REMOVE_TODO, payload: id });
  };


  return (
    <div id="wrapper">
      <TodoTop />
      <TodoEditor addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
    </div>
  );
}

export default App;
