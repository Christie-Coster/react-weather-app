import React from "react";
import "./Weather.css";

export default function Weather(props) {
    return (
        <div className="Weather">
            <div className="row todaysConditions" id="weather-description">
                <div className="col-4 fullTemp">
                    <span id="current-temp">{props.temperature}</span>
                    <span className="degrees">
                        <a
                            className="fahrenheit"
                            id="fahrenheit-button"
                            href="/"
                        >
                            ºF
                        </a>
                        /
                        <a className="celsius" id="celsius-button" href="/">
                            ºC
                        </a>
                    </span>
                </div>
                <div className="col-4">
                    <span className="emoji" id="current-emoji">
                        {props.emoji}
                    </span>
                </div>
                <div className="col-4">
                    <ul>
                        <strong>
                            <li id="current-weather">{props.conditions}</li>
                        </strong>
                        <li className="humidity">
                            Humidity:{" "}
                            <span id="current-humidity">{props.humidity}</span>%
                        </li>
                        <li className="wind">
                            Wind speed:{" "}
                            <span id="current-speed">{props.speed}</span>{" "}
                            <span id="speed-units">mph</span>
                        </li>
                        <li className="highLow">
                            ⬆<span id="current-high">{props.high}</span>º ⬇
                            <span id="current-low">{props.low}</span>º
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
