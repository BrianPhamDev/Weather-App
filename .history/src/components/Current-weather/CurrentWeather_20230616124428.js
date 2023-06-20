import React from "react";
import "./currentWeather.scss";

const CurrentWeather = () => {
  return (
    <div className="weather my-8 w-[300px]">
      <div className="top">
        <p className="city">Vancouver</p>
        <p className="weather-description">Cloudy</p>
      </div>
      <img
        width="50"
        height="50"
        src="https://img.icons8.com/ios-filled/50/cloud.png"
        alt="cloud"
        className="weather-icon"
      />
      <div className="bottom"></div>
    </div>
  );
};

export default CurrentWeather;
