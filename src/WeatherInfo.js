import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon"
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <br />
      <div className="card-container1">
        <div className="card1">
          <h1>{props.data.city}</h1>
          <br />

          <h2>
            <WeatherTemperature celsius={props.data.temperature} />
          </h2>

          <WeatherIcon code={props.data.icon} className />

          <h3 className="description">
            <span>{props.data.description}</span>
            <br />
            Humidity: {props.data.humidity}
            %
            <br />
            Wind:{props.data.wind} <span></span>mph
          </h3>

          <h4>
            <FormattedDate date={props.data.date} />
          </h4>
        </div>
      </div>
      <br />
    </div>
  );
}
