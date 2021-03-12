import React from "react";
import Todo from "./Todo";

const List = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo todo={todo} />
      ))}
    </div>
  );
};

export default List;
