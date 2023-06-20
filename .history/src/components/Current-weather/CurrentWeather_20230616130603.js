import React from "react";
import "./currentWeather.scss";

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <img
          width="80"
          height="80"
          src="https://img.icons8.com/2266EE/ios-filled/50/cloud.png"
          alt="cloud"
          className="weather-icon opacity-100"
        />
        <div>
          <p className="weather-city">Vancouver</p>
          <p className="weather-description">Cloudy</p>
        </div>
      </div>
      <div className="bottom"></div>
    </div>
  );
};

export default CurrentWeather;
