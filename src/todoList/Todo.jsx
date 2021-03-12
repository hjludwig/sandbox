import React from "react";

const todoStyles = {
  display: "flex",
  justifyContent: "space-between"
};

const Todo = ({ todo, deleteTodo }) => {
  return (
    <div id={todo.id} style={todoStyles} className="todoish">
      <p>{todo.text}</p>
      <div>
        <button type="button">Completed</button>
        <button type="button" onClick={() => deleteTodo(todo.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
