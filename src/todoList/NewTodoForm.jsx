import React, { useState } from "react";

const NewTodoForm = ({ handleSubmit, updateValue, value }) => {
  return (
    <div>
      <h2>Add a task</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newTodo">New task</label>
        <input value={value} type="text" id="newTodo" onChange={updateValue} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default NewTodoForm;
