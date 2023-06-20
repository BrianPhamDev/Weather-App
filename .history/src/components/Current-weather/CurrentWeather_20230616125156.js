import React from "react";
import "./currentWeather.scss";

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <img
          width="100"
          height="100"
          src="https://img.icons8.com/ios-filled/50/cloud.png"
          alt="cloud"
          className="weather-icon"
        />
        <div>
          <p className="city">Vancouver</p>
          <p className="weather-description">Cloudy</p>
        </div>
      </div>
      <div className="bottom"></div>
    </div>
  );
};

export default CurrentWeather;
