import "./App.scss";
import Search from "./components/Search/Search";
import CurrentWeather from "./components/Current-weather/CurrentWeather";
import { openweatherKey, openweatherApiUrl } from "./api";

function App() {
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    // Fetch current weather data
    const { data: currentWeather, error: currentWeatherError } = useSWR(
      () =>
        `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    // Fetch forecast data
    const { data: forecast, error: forecastError } = useSWR(
      () =>
        `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    // Rest of the code...
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}></Search>
      <CurrentWeather></CurrentWeather>
    </div>
  );
}

export default App;
