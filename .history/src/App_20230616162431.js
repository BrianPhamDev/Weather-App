import "./App.scss";
import Search from "./components/Search/Search";
import CurrentWeather from "./components/Current-weather/CurrentWeather";
import { openweatherKey, openweatherApiUrl } from "./api";

function App() {
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
        const currentRespond = respond[0].json();
        const forecastRespond = respond[0].json();
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
