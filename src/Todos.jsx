import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodosSlice } from "./redux/Redux";
import { Link, useNavigate } from "react-router-dom";
import { v4 } from "uuid";
function Todos() {
  const todo = useSelector((state) => state.todos.todo);
  const dispatch = useDispatch();
  const [todoName, setTodoName] = useState("");

  const navigate = useNavigate();

  console.log(todo);

  const handleSubmit = () => {
    dispatch(TodosSlice.actions.addTodo({ id: v4(), name: todoName }));
  };

  return (
    <div>
      <input
        type="text"
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      <br />
      {todo.map((todo) => (
        <div>
          <div>{todo.name}</div>
          <div>{todo.id}</div>
          <button onClick={() => dispatch(TodosSlice.actions.deleteTodo(todo))}>
            Delete
          </button>
          <button onClick={() => navigate(`/user/:${todo.id}`)}>
            Navigate
          </button>
          {/* <Link to="/user">nav </Link> */}
        </div>
      ))}
    </div>
  );
}

export default Todos;
