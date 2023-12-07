import "./App.css";
import TodoApp from "./components/TodoComponent";

function App() {
  let todo = "Todo";
  return (
    <div className="App">
      <div>
        <h1 className="title">{todo}</h1>
      </div>
      <div>
        <TodoApp />
      </div>
    </div>
  );
}

export default App;
