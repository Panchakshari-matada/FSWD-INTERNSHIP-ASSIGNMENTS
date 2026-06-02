import { useState } from "react";
import "./Weather.css";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getWeather = async () => {
    if (city === "") {
      setError("Please enter a city");
      return;
    }

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const res = await fetch(`https://wttr.in/${city}?format=j1`);
      const data = await res.json();

      const temp = data.current_condition[0].temp_C;
      const desc = data.current_condition[0].weatherDesc[0].value;
      const humidity = data.current_condition[0].humidity;

      setWeather({ temp, desc, humidity });
    } catch (err) {
      setError("Failed to fetch weather", err.message);
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <h2>Weather Dashboard</h2>

      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={getWeather}>Search</button>

      {loading && <p className="loading">Loading...</p>}

      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="weather-box">
          <h3>{city}</h3>
          <p>Temperature: {weather.temp}°C</p>
          <p>Condition: {weather.desc}</p>
          <p>Humidity: {weather.humidity}%</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
