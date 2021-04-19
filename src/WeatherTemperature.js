import React from "react";
import "./Weather.css";

export default function WeatherTemperature(props){
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
                </span>
            </div>
    );
}