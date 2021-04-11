import React from "react";
import "./Weather.css";


export default function Weather(props) {
    let currentEmoji = (null)
            if (props.data.conditions === "Clouds") {
                currentEmoji = "☁️";
            } else if (props.data.conditions === "Clear") {
                currentEmoji = "☀️";
            } else if (props.data.conditions === "Snow") {
                currentEmoji = "❄️";
            } else if (props.data.conditions === "Rain") {
                currentEmoji = "🌧";
            } else if (props.data.conditions === "Drizzle") {
                currentEmoji= "☔️";
            } else if (props.data.conditions === "Thunderstorm") {
                currentEmoji = "🌩";
            } else {
                currentEmoji = "🌫";
            }
    return(
            <div className="Weather">
                <div className="row todaysConditions" id="weather-description">
                    <div className="col-4 fullTemp">
                        <span id="current-temp">{props.data.temperature}</span>
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
                            {currentEmoji}
                        </span>
                    </div>
                    <div className="col-4">
                        <ul>
                            <strong>
                                <li className="text-capitalize" id="current-weather">{props.data.forecast}</li>
                            </strong>
                            <li className="humidity">
                                Humidity:{" "}
                                <span id="current-humidity">{props.data.humidity}</span>%
                            </li>
                            <li className="wind">
                                Wind speed:{" "}
                                <span id="current-speed">{props.data.speed}</span>{" "}
                                <span id="speed-units">mph</span>
                            </li>
                            <li className="highLow">
                                ⬆<span id="current-high">{props.data.high}</span>º ⬇
                                <span id="current-low">{props.data.low}</span>º
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
);
}
