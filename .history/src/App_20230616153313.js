import "./App.scss";
import Search from "./components/Search/Search";
import CurrentWeather from "./components/Current-weather/CurrentWeather";

function App() {
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split();
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}></Search>
      <CurrentWeather></CurrentWeather>
    </div>
  );
}

export default App;
