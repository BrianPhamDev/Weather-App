import "./App.scss";
import Search from "./components/Search/Search";
import CurrentWeather from "./components/Current-weather/CurrentWeather";
import { openweatherKey, openweatherApiUrl } from "./api";

function App() {
  const { data: currentWeatherData, error: currentWeatherError } =
    useSWR(currentweatherFetch);
  const { data: forecastWeatherData, error: forecastWeatherError } =
    useSWR(forecastweatherFetch);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    const currentweatherFetch = `${openweatherApiUrl}/weather?lat=${lat}&lon=${lon}&appid=${openweatherKey}`;
    const forecastweatherFetch = `${openweatherApiUrl}/forecast/hourly?lat=${lat}&lon=${lon}&appid=${openweatherKey}`;

    return { currentweatherFetch, forecastweatherFetch };
  };
  const { currentweatherFetch, forecastweatherFetch } =
    handleOnSearchChange(searchData);

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}></Search>
      <CurrentWeather></CurrentWeather>
    </div>
  );
}

export default App;
