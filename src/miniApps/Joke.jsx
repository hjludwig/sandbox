import React, { useState } from "react";

const Joke = () => {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchJoke = async () => {
    const url = "https://v2.jokeapi.dev/joke/Any";
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  const handleClick = () => {
    setLoading(true);
    fetchJoke().then((data) => {
      setJoke(data);
      setLoading(false);
    });
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
          {!joke.safe ? (
            <p>This joke is a little off... pick another.</p>
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
