import { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    setLoading(true);
    setError("");
    setWeather(null);

    if (!city.trim()) {
      setLoading(false);
      setError("Please enter a valid city name.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/weather/get?city=${city}`);
      if (!response.ok) {
        throw new Error("City not found or server error.");
      }
      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Weather App</h1>

        <div className="mb-4">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={fetchWeather}
          disabled={loading}
          className={`w-full bg-blue-500 text-white py-2 rounded-lg font-bold transition duration-200 ${
            loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
          }`}
        >
          {loading ? "Loading..." : "Get Weather"}
        </button>

        {error && <div className="mt-4 text-red-500 text-sm text-center">{error}</div>}

        {weather && (
          <div className="mt-6 bg-gray-50 p-4 rounded-lg">
            <h2 className="text-lg font-bold text-gray-700 text-center mb-4">Weather Details</h2>
            <div className="space-y-2">
              <p>
                <strong>Address:</strong> {weather.resolvedAddress}
              </p>
              <p>
                <strong>Latitude:</strong> {weather.latitude}
              </p>
              <p>
                <strong>Longitude:</strong> {weather.longitude}
              </p>
              <p>
                <strong>Timezone:</strong> {weather.timezone}
              </p>
              <p>
                <strong>Time Zone Offset:</strong> {weather.tzoffset}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
