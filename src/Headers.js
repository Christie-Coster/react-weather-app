import React from "react";
import "./Headers.css";

export default function Headers(props) {
  return (
    <div className="headers">
      <h1>
        <span id="city-name">{props.city}</span>
      </h1>
      <h2 id="date-time">
        <span id="date">
          {props.day} {props.month},{props.date}
        </span>
        <br />
        <span role="img" aria-label="clock">
          ⏰ {props.hours}:{props.minuites}
        </span>
        <span id="time" />
      </h2>
    </div>
  );
}
