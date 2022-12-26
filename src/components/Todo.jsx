import { useRef } from "react";
import { createTodo } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { getTasks } from "../features/todoSlice";

const Todo = () => {
  const dispatch = useDispatch();
  const todoRef = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    if (todoRef.current.value.trim() !== "") {
      createTodo({
        task: todoRef.current.value,
        isDone: false,
      });
      dispatch(getTasks());
    }
    todoRef.current.value = "";
  };

  return (
    <div className="todo-form">
      <div className="form__group field">
        <input
          ref={todoRef}
          type="input"
          className="form__field"
          name="todo-input"
          id="todo"
          placeholder="Todo"
        />
        <label htmlFor="todo" className="form__label">
          To-Do
        </label>
      </div>
      <button className="btn add-btn" onClick={handleClick}>
        Add
      </button>
    </div>
  );
};

export default Todo;
