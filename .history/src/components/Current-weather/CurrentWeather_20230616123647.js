import React from "react";
import "./currentWeather.scss";

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <p className="city">Vancouver</p>
        <p className="weather-description">Sunny</p>
      </div>
      <img src="" alt="weather" className="weather-icon" />
      <div className="bottom"></div>
    </div>
  );
};

export default CurrentWeather;
