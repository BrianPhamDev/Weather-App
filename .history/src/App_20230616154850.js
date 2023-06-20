import "./App.scss";
import Search from "./components/Search/Search";
import CurrentWeather from "./components/Current-weather/CurrentWeather";
import { openweatherKey, openweatherApiUrl } from "./api";

function App() {
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    console.log(lat, lon);
    const currentweatherFetch = fetch(
      `${openweatherApiUrl}/weather?lat=${lat}&lon=${lon}&appid=${openweatherKey}`
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
