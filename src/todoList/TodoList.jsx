import React, { useState } from "react";
import List from "./List";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  const updateValue = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, value]);
    setValue("");
  };
  return (
    <div className="mini-app">
      <h1>Your To Do List</h1>
      <NewTodoForm
        handleSubmit={handleSubmit}
        value={value}
        updateValue={updateValue}
      />
      <List todos={todos} />
      <button type="button" onClick={() => setTodos([])}>
        Clear all
      </button>
    </div>
  );
};

export default TodoList;
