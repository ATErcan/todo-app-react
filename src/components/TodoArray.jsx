import { useSelector, useDispatch } from "react-redux";
import { getTasks } from "../features/todoSlice";
import { useEffect } from "react";
import TodoItems from "./TodoItems";

const TodoArray = () => {
  const dispatch = useDispatch();
  const { todoList } = useSelector((state) => state.todo);

  useEffect(() => {
    dispatch(getTasks());
  }, []);

  const todos = todoList.map((todo) => {
    return <TodoItems key={todo.id} todo={todo} />;
  });
  return <div className="todo-list">{todos}</div>;
};

export default TodoArray;
