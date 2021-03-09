import React, { useState } from "react";

const Sauce = () => {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setName(e.target.elements.name.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Your name: </label>
        <input id="name" type="text" />
        <button type="submit">Submit</button>
      </form>
      {name ? (
        <div>
          <h1>Hello {name}, your sauce is ready.</h1>
        </div>
      ) : (
        <div>
          <h1>Please enter your name.</h1>
        </div>
      )}
    </div>
  );
};

export default Sauce;
