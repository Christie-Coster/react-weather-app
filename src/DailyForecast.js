import React from "react";

export default function DailyForecast(props) {
    function maxTempersture() {
        let temperature = Math.round(props.data.temp.max);
        return (temperature);
    }

    function minTemperature() {
        let temperature = Math.round(props.data.temp.min);
        return (temperature);
    }

    function day() {
        let date = new Date(props.data.dt *1000);
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let day = date.getDay();
        return (days[day]);
    }
    
    let emoji = (null)
            if (props.data.weather[0].main === "Clouds") {
                emoji = "☁️";
            } else if (props.data.weather[0].main === "Clear") {
                emoji = "☀️";
            } else if (props.data.weather[0].main === "Snow") {
                emoji = "❄️";
            } else if (props.data.weather[0].main === "Rain") {
                emoji = "🌧";
            } else if (props.data.weather[0].main === "Drizzle") {
                emoji= "☔️";
            } else if (props.data.weather[0].main === "Thunderstorm") {
                emoji = "🌩";
            } else {
                emoji = "🌫";
            }

    return(
        <div className="Forecast">
            <div className="dayOfTheWeek">{day()}</div>
            <div className="emoji">{emoji}</div>
            <div className="highLow">
                ⬆<span>{maxTempersture()}</span>º 
                ⬇<span>{minTemperature()}</span>º
            </div>
        </div>
    )
}