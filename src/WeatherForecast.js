import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./Weather.css";
export default function WeatherForecast(props) {
  function displayForecast(response) {}
  let apiKey = "094780c710fa4efd669f0df8c3991927";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecastDay">Wed</div>
          <WeatherIcon code="01d" size={42} />
          <div className="WeatherForecastTemperatures">
            <span className="WeatherForecastTemperatureMax">19°</span>/
            <span className="WeatherForecastTemperatureMin">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
