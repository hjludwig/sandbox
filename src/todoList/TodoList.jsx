import React, { useState } from "react";
import List from "./List";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = e.target.elements.newTodo;
    setTodos([...todos, newTodo.value]);
    newTodo.value = "";
  };
  return (
    <div className="mini-app">
      <h1>Your To Do List</h1>
      <NewTodoForm handleSubmit={handleSubmit} />
      <List todos={todos} />
      <button type="button" onClick={() => setTodos([])}>
        Clear all
      </button>
    </div>
  );
};

export default TodoList;
