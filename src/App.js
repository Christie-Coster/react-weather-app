import React, {useState} from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import "./App.css";
import "./Search.css";

import Weather from "./Weather.js";
import Forecast from "./Forecast.js";
import Footer from "./Footer.js";
import Headers from "./Headers";

export default function App() {
    const [currentWeather, setCurrentWeather] = useState({ready: false});
    const [city, setCity] = useState("Moab")
    function handleResponse(response) {
        console.log(response)
        setCurrentWeather ({
            ready: true,
            coordinates: response.data.coord,
            city: response.data.name,
            date: new Date(response.data.dt * 1000),
            temperature: Math.round(response.data.main.temp),
            forecast: response.data.weather[0].description,
            conditions: response.data.weather[0].main,
            humidity: response.data.main.humidity,
            speed: Math.round(response.data.wind.speed),
            high:  Math.round(response.data.main.temp_max),
            low:  Math.round(response.data.main.temp_min),        
        });
    }
    
    function search(){
    const apiKey = "f78eec04b621104e9165191859d3da15"
        let unit = "imperial";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=${unit}`;
        axios.get(`${apiUrl}`).then(handleResponse);
    }
    function handleFormSubmit(event){
    event.preventDefault();
    search();
    }
    function handleCityChange(event){
    setCity(event.target.value);
    }
    if (currentWeather.ready) {
        return (
        <div className="App">
            <div className="Search">
                <form id="search-form" onSubmit={handleFormSubmit}>
                    <div className="row">
                    <div className="col-12">
                        <div className="input-group mb-3" id="search-form">
                        <input
                            id="search-input"
                            type="search"
                            className="form-control citySearch"
                            placeholder="Enter city name"
                            autoComplete="off"
                            autoFocus="on"
                            onChange={handleCityChange}
                        />
                        <button className="btn searchButton">
                            <span role="img" aria-label="search">
                            🔍
                            </span>
                        </button>
                        </div>
                    </div>
                    </div>
                </form>
                </div>
            <Headers data={currentWeather}  />
            <Weather data={currentWeather} />
            <Forecast data={currentWeather} />
            <Footer />
        </div>
    );
    } else {
        search();
        return( "Loading..."
        )
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);