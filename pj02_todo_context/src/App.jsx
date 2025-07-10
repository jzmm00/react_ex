import { TodoProvider } from "./context";
import { TodoTop, TodoEditor, TodoList } from "./components";
import "./App.css";


function App() {

  return (
    <TodoProvider>
      <div id="wrapper">
        <TodoTop />
        <TodoEditor />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
