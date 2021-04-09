import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";
import Headers from "./Headers";

export default function Weather(props) {
    const [currentWeather, setCurrentWeather] = useState({ready: false});
    let currentEmoji = (null)
        if (currentWeather.conditions === "Clouds") {
            currentEmoji = "☁️";
        } else if (currentWeather.conditions === "Clear") {
            currentEmoji = "☀️";
        } else if (currentWeather.conditions === "Snow") {
            currentEmoji = "❄️";
        } else if (currentWeather.conditions === "Rain") {
            currentEmoji = "🌧";
        } else if (currentWeather.conditions === "Drizzle") {
            currentEmoji= "☔️";
        } else if (currentWeather.conditions === "Thunderstorm") {
            currentEmoji = "🌩";
        } else {
            currentEmoji = "🌫";
        }
    function handleResponse(response) {
        console.log(response)
        setCurrentWeather ({
            ready: true,
            city: response.data.name,
            date: new Date(response.data.dt * 1000),
            temperature: Math.round(response.data.main.temp),
            forecast: response.data.weather[0].description,
            conditions: response.data.weather[0].main,
            humidity: response.data.main.humidity,
            speed: Math.round(response.data.wind.speed),
            high:  Math.round(response.data.main.temp_max),
            low:  Math.round(response.data.main.temp_min)          
        });
    }
    
    if (currentWeather.ready) {
        return (
        <div>
            <Headers city={currentWeather.city} date={currentWeather.date}  />
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
                            {currentEmoji}
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
