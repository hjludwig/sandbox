import React, { useState } from "react";
import List from "./List";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="mini-app">
      <h1>Your To Do List</h1>
      <NewTodoForm handleSubmit={handleSubmit} />
      <List />
    </div>
  );
};

export default TodoList;
