import Todo from "./components/Todo";
import "./App.css";
import { getTasks } from "./utils/firebase";

function App() {
  console.log(getTasks());
  return (
    <div className="App">
      <Todo />
    </div>
  );
}

export default App;
