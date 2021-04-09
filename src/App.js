import React from "react";
import ReactDOM from "react-dom";

import "./App.css";

import Search from "./Search.js";
import Weather from "./Weather.js";
import Forecast from "./Forecast.js";
import Footer from "./Footer.js";

export default function App() {
    return (
        <div className="App">
            <Search />
            <Weather defaultCity={"Paris"}/>
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
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
