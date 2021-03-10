import React, { useState } from "react";

const Weather = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [weatherData, setWeatherData] = useState();
  const key = process.env.MY_SUPER_SECRET;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Hamilton,ON,CA&appid=${key}&units=metric`;
  const fetchSomeData = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => console.log(err));
  };

  const myData = fetchSomeData(url);

  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setWeatherData(data);
    setIsLoading(false);
  };
  return (
    <div className="mini-app">
      {!weatherData ? (
        <>
          <h1>Let's check the weather!</h1>
          <button type="button" onClick={fetchData}>
            Get the weather
          </button>
        </>
      ) : isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>The weather in Hamilton:</p>
          <h1>{weatherData.main.temp}&#176; C</h1>
          <p>{weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
