import React from "react";
import "./Headers.css";

export default function Headers(props) {
        let days = [
                  "Sunday",
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
        ];
      let day = days[props.date.getDay()];
        let months = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
        ];
      let month = months[props.date.getMonth()];
      let date = props.date.getDate();
      let hours = props.date.getHours();
        if (hours < 10) {
                hours = `0${hours}`;
        }
    let minutes = props.date.getMinutes();
        if (minutes < 10) {
        minutes = `0${minutes}`;
        }
    return (
          <div className="headers">
            <h1>
              <span id="city-name">{props.city}</span>
            </h1>
            <h2 id="date-time">
              <span id="date">
                {day} {month}, {date}
              </span>
              <br />
              <span role="img" aria-label="clock">
                ⏰ {hours}:{minutes}
              </span>
              <span id="time" />
            </h2>
          </div>
        ); 

}