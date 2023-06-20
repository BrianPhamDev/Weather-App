import "./App.scss";
import Search from "./components/Search/Search";
import CurrentWeather from "./components/Current-weather/CurrentWeather";
import { fetcher } from "./api";

function App() {
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    console.log(lat, lon);

    const { data } = useSWR("/api/user/123", fetcher);
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}></Search>
      <CurrentWeather></CurrentWeather>
    </div>
  );
}

export default App;
