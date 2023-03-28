import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather">
      <div className="Weather-app-wrapper">
        <div className="Weather-app">
          <form id="search-form" className="mb-4">
            <div className="row">
              <div className="col-9">
                <input
                  id="search-city"
                  type="search"
                  placeholder="Type a city..."
                  autoFocus="on"
                  autoComplete="off"
                  className="form-control"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
          <h1 id="city">Rome</h1>
          <ul>
            <li id="dateTime">December 28, 12:26</li>
            <li id="description"></li>
          </ul>
          <div className="row">
            <div className="col-6">
              <div className="d-flex Weather-temperature">
                <img src="" alt="Clear" id="icon" />
                <div>
                  <strong id="temperature"></strong>
                  <span className="units">
                    <a id="cLink" href="#">
                      °C
                    </a>
                    |
                    <a id="fLink" href="#">
                      °F
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  Humidity: <span id="humidity"></span>%
                </li>
                <li>
                  Wind: <span id="wind"> </span> km/h
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="weather-forecast" id="forecast"></div>
      </div>
    </div>
  );
}
