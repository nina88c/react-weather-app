import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
 

  function handleResponse(response) {
    console.log(response.data);
    console.log(response.data.main.humidity);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
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
          <button id="current-location-button">
            <span role="img" aria-label="Current location">
              📍 Current
            </span>
          </button>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    const apiKey = "fbef01f4et1b02o0d25c27210a43ef3f";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
    return "loading...";
  }
}
