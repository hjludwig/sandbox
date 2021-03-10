import React, { useState } from "react";

const Joke = () => {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);
  const [key, setKey] = useState("");
  const [showJoke, setshowJoke] = useState(false);
  const secret = "poop";

  const fetchJoke = async () => {
    const url = "https://v2.jokeapi.dev/joke/Any";
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  const handleClick = () => {
    setLoading(true);
    setshowJoke(false);
    fetchJoke().then((data) => {
      setJoke(data);
      setLoading(false);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userGuess = e.target.elements.secret.value;
    if (userGuess === secret) {
      setshowJoke(true);
    }
    console.log("submitted", userGuess);
  };

  return (
    <div className="mini-app">
      <h1>Here have a joke</h1>
      <button type="button" onClick={handleClick}>
        Get me a joke
      </button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {!joke.safe && !showJoke ? (
            <div>
              <p>This joke is a for grown ups only.</p>
              <p>Enter the secret code to see the joke.</p>
              <form onSubmit={handleSubmit}>
                <input type="text" id="secret" />
                <button type="submit">Submit</button>
              </form>
            </div>
          ) : joke.type === "single" ? (
            <p>{joke.joke}</p>
          ) : (
            <div>
              <p>Q. {joke.setup}</p>
              <p>A. {joke.delivery}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Joke;
