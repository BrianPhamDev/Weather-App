import React from "react";
import "./currentWeather.scss";

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <img
          width="80"
          height="80"
          src="https://img.icons8.com/f3d739/ios-filled/50/cloud.png"
          alt="cloud"
          className="weather-icon"
        />
        <div>
          <p className="weather-city">Vancouver</p>
          <p className="weather-description">Cloudy</p>
        </div>
      </div>
      <div className="bottom">
        <p className="weather-temperature">16°C</p>
        <div className="parameter-row">
          <span className="parameter-label">Details</span>
        </div>
        <div className="parameter-row">
          <span className="parameter-label">Feels like</span>
          <span className="parameter-value">22°C</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
