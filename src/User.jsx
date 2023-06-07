import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { todoName } = useParams();
  console.log(todoName);
  return (
    <div>
      <h1>this is the userPage {todoName} </h1>
    </div>
  );
}

export default User;
