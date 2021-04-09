import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
    const [currentWeather, setCurrentWeather] = useState({ready: false});

    function handleResponse(response) {
        setCurrentWeather ({
            ready: true,
            temperature: Math.round(response.data.main.temp),
            emoji: "☀️",
            forecast: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            speed: Math.round(response.data.wind.speed),
            high:  Math.round(response.data.main.temp_max),
            low:  Math.round(response.data.main.temp_min)          
        });
    }
    
    if (currentWeather.ready) {
        return (
            <div className="Weather">
                <div className="row todaysConditions" id="weather-description">
                    <div className="col-4 fullTemp">
                        <span id="current-temp">{currentWeather.temperature}</span>
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
                            {currentWeather.emoji}
                        </span>
                    </div>
                    <div className="col-4">
                        <ul>
                            <strong>
                                <li className="text-capitalize" id="current-weather">{currentWeather.forecast}</li>
                            </strong>
                            <li className="humidity">
                                Humidity:{" "}
                                <span id="current-humidity">{currentWeather.humidity}</span>%
                            </li>
                            <li className="wind">
                                Wind speed:{" "}
                                <span id="current-speed">{currentWeather.speed}</span>{" "}
                                <span id="speed-units">mph</span>
                            </li>
                            <li className="highLow">
                                ⬆<span id="current-high">{currentWeather.high}</span>º ⬇
                                <span id="current-low">{currentWeather.low}</span>º
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    } else {
        const apiKey = "f78eec04b621104e9165191859d3da15"
        let unit = "imperial";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&APPID=${apiKey}&units=${unit}`;
        axios.get(`${apiUrl}`).then(handleResponse);

        return "Loading..."
    }
}
