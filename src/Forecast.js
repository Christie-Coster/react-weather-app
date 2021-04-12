import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Forecast.css";
import DailyForecast from "./DailyForecast";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect (() => {
    setLoaded(false);
  },  [props.data.coordinates]);

function handleApiResponse(response) {
  setForecast(response.data.daily);
  setLoaded(true);
}

function loadForecast() {
const apiKey = "f78eec04b621104e9165191859d3da15";
let unit = "imperial";
let longitude = props.data.coordinates.lon;
let latitude = props.data.coordinates.lat;
let apiUrl =  `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&APPID=${apiKey}&units=${unit}`;
axios.get(apiUrl).then(handleApiResponse);
}

if (loaded) {
  return (
    <div className="row" id="futureForecast">
        {forecast.map(function (dailyForecast, index) {
          if (index < 5) {
          return(
            <div className="col" key="index">
               <DailyForecast data={dailyForecast} />
            </div>
            );
          } else {
            return null;
          }
        })}
      
    </div>
  );
  } else {
    loadForecast();
    return ("Loading...")
}
}
