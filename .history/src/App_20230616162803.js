import "./App.scss";
import Search from "./components/Search/Search";
import CurrentWeather from "./components/Current-weather/CurrentWeather";
import { openweatherKey, openweatherApiUrl } from "./api";
import { useState } from "react";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentweatherFetch = fetch(
      `${openweatherApiUrl}/weather?lat=${lat}&lon=${lon}&appid=${openweatherKey}`
    );
    const forecastweatherFetch = fetch(
      `${openweatherApiUrl}/forecast/hourly?lat=${lat}&lon=${lon}&appid=${openweatherKey}`
    );

    Promise.all([currentweatherFetch, forecastweatherFetch]).then(
      async (respond) => {
        const currentRespond = await respond[0].json();
        const forecastRespond = await respond[1].json();

        setCurrentWeather(currentRespond);
        setForecastWeather(forecastRespond);
      }
    );
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}></Search>
      <CurrentWeather></CurrentWeather>
    </div>
  );
}

export default App;
