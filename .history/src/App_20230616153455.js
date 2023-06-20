import "./App.scss";
import Search from "./components/Search/Search";
import CurrentWeather from "./components/Current-weather/CurrentWeather";

function App() {
  const handleOnSearchChange = (searchData) => {
    const s = searchData.value.split(" ");
  };
  console.log(s);
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}></Search>
      <CurrentWeather></CurrentWeather>
    </div>
  );
}

export default App;
