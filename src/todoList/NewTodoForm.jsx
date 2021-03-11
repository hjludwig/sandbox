import React from "react";

const NewTodoForm = ({ handleSubmit }) => {
  return (
    <div>
      <h2>Add a task</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newTodo">New task</label>
        <input type="text" id="newTodo" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default NewTodoForm;
