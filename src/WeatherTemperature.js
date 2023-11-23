import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
}

  function showToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
}

  if (unit === "celsius") {
    return (
      <div className="WeatherTemerature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="units">°C | <a href="/" onClick={showToFahrenheit}> °F</a> </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9 / 5) + 32;
    return (
      <div className="WeatherTemerature">
        <span className="temperature">{Math.round(fahrenheit)}</span>
        <span className="units">
          <a href="/" onClick={showToCelsius}>
           °C </a>{" "} | °F
        </span>
      </div>
    );
  }
}