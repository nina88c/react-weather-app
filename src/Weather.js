import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

 

  function handleResponse(response) {
    console.log(response.data);
 
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
    });
   
  }
  
  function handleSubmit(event) {
    event.preventDefault();
search();
  }
 function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() { 
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <form onSubmit={handleSubmit}>
          <input type="submit" value="🔍" />
          <input
            type="text" // Corrected the input type to accept text input
            id="city-input"
            placeholder="Enter your city"
            onChange={handleCityChange}
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
    search();
    return "loading...";
  }
}
