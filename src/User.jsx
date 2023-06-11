import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { TodosSlice } from "./redux/Redux";
import { useNavigate } from "react-router-dom";

function User() {
  const { id } = useParams();
  const todo = useSelector((state) => state.todos.todo);
  const navigate = useNavigate();
  const task = todo.find((task) => task.id === id);
  console.log(task);
  const [name, setName] = useState(task.name);
  const dispatch = useDispatch();
  //   console.log(id);
  const handleUpdation = () => {
    const updatedData = { id: id, name: name };
    dispatch(TodosSlice.actions.updation(updatedData));
    navigate("/");
  };
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleUpdation}>Update</button>
      <h1>this is the userPage {id}</h1>
    </div>
  );
}

export default User;
