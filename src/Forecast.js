import React from "react";
import "./Forecast.css";

export default function Forecast(props) {
  return (
    <div className="Forecast">
      <div className="dayOfTheWeek">{props.day}</div>
      <div className="emoji">{props.emoji}</div>
      <div className="highLow">
        ⬆<span>{props.high}</span>º ⬇<span>{props.low}</span>º
      </div>
    </div>
  );
}
