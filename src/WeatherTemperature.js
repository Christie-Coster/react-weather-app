import React, {useState} from "react";
import "./Weather.css";

export default function WeatherTemperature(props){
    const [unit, setUnit] = useState ("fahrenheit");

    function showFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    if (unit === "fahrenheit") {
        return (
            <div className="WeatherTemperature">
                <span id="current-temp">{Math.round(props.fahrenheit)}</span>
                    <span className="degrees">
                        <span
                            className="fahrenheit"
                            id="fahrenheit-button"
                        >
                            ºF
                        </span>
                        /
                        <a 
                        className="celsius" 
                        id="celsius-button" 
                        href="/" 
                        onClick={showCelsius}
                        >
                            ºC
                        </a>
                </span>
            </div>
    );
    } else {
        let celsius = (props.fahrenheit-32)*5/9
        return(
            <div className="WeatherTemperature">
                <span id="current-temp">{Math.round(celsius)}</span>
                    <span className="degrees">
                        <a
                            className="fahrenheit"
                            id="fahrenheit-button"
                            href="/" 
                            onClick={showFahrenheit}
                            >
                            ºF
                        </a>
                        /
                        <span className="celsius" id="celsius-button" >
                            ºC
                        </span>
                </span>
            </div>
        )
    }
}