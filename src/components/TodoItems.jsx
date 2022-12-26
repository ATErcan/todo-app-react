import { removeTodo, toggleTodo } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { getTasks } from "../features/todoSlice";

const TodoItems = (props) => {
  const { id, isDone, task } = props.todo;
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    removeTodo(id);
    dispatch(getTasks());
  };

  const toggleComplete = (e) => {
    toggleTodo(props.todo);
    dispatch(getTasks());
  };

  return (
    <div
      className="task-container"
      style={{
        backgroundImage: isDone
          ? "linear-gradient(-180deg, #00d775, #00bd68)"
          : "radial-gradient(100% 100% at 100% 0, #5adaff 0,#5468ff 100%)",
      }}
    >
      <h4
        className="task-text"
        style={{
          textDecoration: isDone && "line-through #000",
        }}
      >
        {task}
      </h4>
      <div className="buttons">
        <button
          type="button"
          className="btn toggle-btn"
          onClick={toggleComplete}
        >
          {isDone ? "Uncomplete" : "Complete"}
        </button>
        <button type="button" className="btn delete-btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItems;
