export const geoApiUrl = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c7c9121d45mshdcde5e635b4459bp10eef3jsn15a90c034057",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const openweatherUrl =
  "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}";
