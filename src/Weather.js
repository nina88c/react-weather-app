import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);

    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: "Wednesday 07:00",
      description: response.data.condition.description,
      iconUrl:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png",
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <form id="search-form">
          <input type="submit" value="🔍" />
          <input
            type="city"
            id="city-input"
            placeholder="       Enter your city     "
          />
          <button id="current-location-button">📍 Current</button>
        </form>
        <br />

        <div className="card-container1">
          <div className="card1">
            <h1>{weatherData.city}</h1>
            <h2>
              {" "}
              <span>{weatherData.description}</span>
              <span>
                {Math.round(weatherData.temperature)}
                <a href="#">°C</a>| <a href="#">°F</a>
              </span>
            </h2>
            <img
              src={weatherData.iconUrl}
              className="img-container1"
              alt={weatherData.description}
            />
            <h3>
              <span></span>
              <br />
              Humidity: <span></span>%
              <br />
              Wind:{weatherData.wind} <span></span>mph
            </h3>
            <h4>Friday 18:42</h4>
          </div>
        </div>
        <br />
      </div>
    );
  } else {
    const apiKey = "fbef01f4et1b02o0d25c27210a43ef3f";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
    return "loading...";
  }
}
