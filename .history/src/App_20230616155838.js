import "./App.scss";
import Search from "./components/Search/Search";
import CurrentWeather from "./components/Current-weather/CurrentWeather";
import { openweatherKey, openweatherApiUrl } from "./api";
import useSWR from "swr";

function App() {
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentweatherFetch = `${openweatherApiUrl}/weather?lat=${lat}&lon=${lon}&appid=${openweatherKey}`;
    const forecastweatherFetch = `${openweatherApiUrl}/forecast/hourly?lat=${lat}&lon=${lon}&appid=${openweatherKey}`;
    const { data: currentWeatherData, error: currentWeatherError } =
      useSWR(currentweatherFetch);
    const { data: forecastWeatherData, error: forecastWeatherError } =
      useSWR(forecastweatherFetch);
    console.log(currentWeatherData);
    console.log(forecastWeatherData);
    console.log(currentWeatherError);
    console.log(forecastWeatherError);
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}></Search>
      <CurrentWeather></CurrentWeather>
    </div>
  );
}

export default App;
