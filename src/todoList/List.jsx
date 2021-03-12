import React from "react";
import Todo from "./Todo";

const List = ({ todos, deleteTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo todo={todo} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
};

export default List;
