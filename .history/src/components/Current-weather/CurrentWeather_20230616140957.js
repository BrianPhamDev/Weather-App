import React from "react";
import "./currentWeather.scss";

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="weather-city">Vancouver</p>
          <p className="weather-description">Cloudy</p>
        </div>
        <img
          width="80"
          height="80"
          src="https://img.icons8.com/FFFFFF/ios-filled/50/cloud.png"
          alt="cloud"
          className="weather-icon"
        />
      </div>
      <div className="bottom">
        <p className="weather-temperature">16°C</p>
        <div className="weather-details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">22°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">2 m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">15%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">15 hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
