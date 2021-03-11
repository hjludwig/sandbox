import React from "react";

const todoStyles = {
  display: "flex",
  justifyContent: "space-between"
};

const Todo = () => {
  return (
    <div style={todoStyles}>
      <p>A todo</p>
      <div>
        <button type="button">Completed</button>
        <button type="button">Delete</button>
      </div>
    </div>
  );
};

export default Todo;
