import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  //   console.log(id);
  return (
    <div>
      <h1>this is the userPage {id}</h1>
    </div>
  );
}

export default User;
