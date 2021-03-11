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
      ) : joke.safe ? (
        <SingleJoke joke={joke} />
      ) : (
        <GrownUpJoke joke={joke} />
      )}
    </div>
  );
};
const GrownUpJoke = ({ joke }) => {
  const [showJoke, setshowJoke] = useState(false);
  const [guesses, setGuesses] = useState(0);
  const secret = "12345";
  const handleSubmit = (e) => {
    e.preventDefault();
    const userGuess = e.target.elements.secret.value;
    if (userGuess === secret) {
      setshowJoke(true);
    } else {
      setGuesses(guesses + 1);
    }
  };
  return (
    <>
      {showJoke ? (
        <SingleJoke joke={joke} />
      ) : (
        <div>
          {guesses === 0 ? (
            <div>
              <p>This joke is a for grown ups only.</p>
              <p>Enter the secret code to see the joke.</p>
            </div>
          ) : (
            <div>
              <p>
                That wasn't the password, try again or click for a new joke.
              </p>
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <input type="text" id="secret" />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </>
  );
};
const SingleJoke = ({ joke }) => {
  return (
    <div>
      {joke.type === "single" ? (
        <p>{joke.joke}</p>
      ) : (
        <div>
          <p>Q. {joke.setup}</p>
          <p>A. {joke.delivery}</p>
        </div>
      )}
    </div>
  );
};

export default Joke;
