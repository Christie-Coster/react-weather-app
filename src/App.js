import React, {useState} from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import "./App.css";

import Search from "./Search.js";
import Weather from "./Weather.js";
import Forecast from "./Forecast.js";
import Footer from "./Footer.js";
import Headers from "./Headers";

export default function App() {
    const [currentWeather, setCurrentWeather] = useState({ready: false});
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
        <div className="App">
            <Search />
            <Headers data={currentWeather}  />
            <Weather data={currentWeather} />
            <div className="row" id="futureForecast">
                <div className="col-1" />
                <div className="col-2">
                    <Forecast day={"Mon"} emoji={"🌤"} high={60} low={50} />
                </div>
                <div className="col-2">
                    <Forecast day={"Tue"} emoji={"⛅️"} high={50} low={40} />
                </div>
                <div className="col-2">
                    <Forecast day={"Wed"} emoji={"🌧"} high={40} low={30} />
                </div>
                <div className="col-2">
                    <Forecast day={"Thu"} emoji={"☔️"} high={30} low={20} />
                </div>
                <div className="col-2">
                    <Forecast day={"Fri"} emoji={"❄️"} high={20} low={10} />
                </div>
                <div className="col-1" />
            </div>
            <Footer />
        </div>
    );
    } else { 
        const apiKey = "f78eec04b621104e9165191859d3da15"
        let unit = "imperial";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Dubai&APPID=${apiKey}&units=${unit}`;
        axios.get(`${apiUrl}`).then(handleResponse);

        return( "Loading..."
        )
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);