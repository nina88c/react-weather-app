import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <br />
      <div className="card-container1">
        <div className="card1">
          <h1>{props.data.city}</h1>
          <br />

          <h2>
            <span>{Math.round(props.data.temperature)}</span>
          </h2>

          <img className="img-container1" src={props.data.description} alt="" />

          <h3 className="description">
            <span>{props.data.description}</span>
            <br />
            Humidity: {props.data.humidity}
            %
            <br />
            Wind:{props.data.wind} <span></span>mph
          </h3>

          <h4>
            <FormattedDate date={props.date.date} />
          </h4>
        </div>
      </div>
      <br />
    </div>
  );
}
