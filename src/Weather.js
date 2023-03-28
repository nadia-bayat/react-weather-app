import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import { RotatingLines } from "react-loader-spinner";
import "./Weather.css";
export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl: "http://openweathermap.org/img/wn/01d@2x.png",
    });
  }
  if (weatherData.loaded) {
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
            <h1 id="city">{weatherData.city}</h1>
            <ul>
              <li id="dateTime">
                <FormattedDate date={weatherData.date} />
              </li>
              <li className="description">{weatherData.description}</li>
            </ul>
            <div className="row">
              <div className="col-6">
                <div className="d-flex Weather-temperature">
                  <img
                    src={weatherData.iconURL}
                    alt={weatherData.description}
                    id="icon"
                  />
                  <div>
                    <strong id="temperature">
                      {Math.round(weatherData.temperature)}
                    </strong>
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
                    Humidity: <span id="humidity">{weatherData.humidity}</span>%
                  </li>
                  <li>
                    Wind: <span id="wind">{weatherData.wind}</span> km/h
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="weather-forecast" id="forecast"></div>
        </div>
      </div>
    );
  } else {
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return (
      <RotatingLines
        strokeColor=" #143e75"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    );
  }
}
