import React, {useState} from "react";
import "./Search.css";

export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity)
 
  function search(){
    const apiKey = "f78eec04b621104e9165191859d3da15"
        let unit = "imperial";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=${unit}`;
        axios.get(`${apiUrl}`).then(handleResponse);
  }
  function handleSubmit(event){
    event.preventDefault();
    search();
  }
  function handleCityChange(event){
    setCity(event.target.value);
  }

  return (
    <div className="Search">
      <form id="search-form" onSubmit={handleSubmit}>
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
              <button className="btn searchButton" id="location-button">
                <span role="img" aria-label="pin">
                  📍
                </span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
