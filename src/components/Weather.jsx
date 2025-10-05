import React, { useState } from "react";

export default function Weather() {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const [weather, setWeather] = useState(null);
  const apiKey = import.meta.env.VITE_APP_APIKEY;
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };
  const handleFetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );
      if (!response.ok) {
        throw new Error("city not found");
      }
      const data = await response.json();

      setWeather(data);
      setError("");
    } catch (error) {
      setError(error.message);
      setWeather(null);
    }
  };

  return (
    <div>
      <h1>Weather APP</h1>
      <input type="text" value={city} onChange={handleCityChange} />
      <button onClick={handleFetchWeather}>Get Weather</button>
      {weather && <div>{weather.main.temp}</div>}
    </div>
  );
}
