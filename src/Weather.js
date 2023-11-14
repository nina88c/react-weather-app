import React, { useState }  from "react";
import axios from "axios";
import "./Weather.css";


export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
   
    setWeatherData({
      temperature: response.data.main.temp,
      wind: 12,
      city: response.data.name,
    });
  }
  
    

  if (ready) {

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
            <h2> <span>{weatherData.description}</span>
              
              <span>
                <a href="#">°C</a>{Math.round(weatherData.temperature)}| <a href="#">°F</a>
              </span>
            </h2>
            <img src={weatherData.iconUrl} className="img-container1" alt="clear" />
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
    const apiKey = "34ae1065362d42545661451bda2b8a1f";
     let city = "London";
    let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;


    axios.get(apiUrl).then(handleResponse);
    return "loading...";
  }
}
