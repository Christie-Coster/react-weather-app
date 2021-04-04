import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form id="search-form">
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
