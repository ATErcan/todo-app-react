import { removeTodo, toggleTodo } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { getTasks } from "../features/todoSlice";

const TodoItems = (props) => {
  const { id, isDone, task } = props.todo;
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.preventDefault();
    removeTodo(id);
    dispatch(getTasks());
  };

  const toggleComplete = (e) => {
    e.preventDefault();
    toggleTodo(props.todo);
    dispatch(getTasks());
  };

  return (
    <div
      className="task-container"
      style={{ backgroundColor: isDone ? "green" : "red" }}
    >
      <h4>{task}</h4>
      <div className="buttons">
        <button className="btn toggle-btn" onClick={toggleComplete}>
          Complete
        </button>
        <button className="btn delete-btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItems;
