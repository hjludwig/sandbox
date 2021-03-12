import React, { useState } from "react";
import { v4 as uuid } from "uuid";
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

    const newTodo = {
      text: value,
      id: uuid()
    };
    console.log(newTodo);
    setTodos([...todos, newTodo]);
    setValue("");
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    console.log(todos, newTodos);
    setTodos(newTodos);
  };
  return (
    <div className="mini-app">
      <h1>Your To Do List</h1>
      <NewTodoForm
        handleSubmit={handleSubmit}
        value={value}
        updateValue={updateValue}
      />
      <List todos={todos} deleteTodo={deleteTodo} />
      <button type="button" onClick={() => setTodos([])}>
        Clear all
      </button>
    </div>
  );
};

export default TodoList;
