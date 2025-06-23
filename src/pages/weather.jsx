import React, { useState } from "react";
import { fetchWeatherbyCity } from "../features/weatherSlice";
import { useSelector, useDispatch } from "react-redux";
import { clearWeather } from "../features/weatherSlice";
import { getBackgroundByCondition } from "../utils/backgroundConditionChecker";
import GridLayout from "../components/gridLayout";
import FavouritesGrid from "../components/favouritesGrid";
import Loader from "../components/Loader";

const Weather = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState("");
  const weather = useSelector((state) => state.weather) || null;
  console.log(weather);

  const favourites = useSelector((state) => state.favourites);
  const background = getBackgroundByCondition(
    weather?.data?.weather?.[0]?.main || "Clear"
  );

  return (
    <div
      key={background}
      className="flex flex-col items-center min-h-[100vh] h-full w-full p-[10px] bg-cover bg-center animate-in fade-in duration-100 ease-initial"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className={`flex justify-center w-full space-x-2`}>
        <input
          className="bg-amber-50 bg-opacity-50 border-black border-b-2 pl-2 h-10 rounded-md w-full sm:w-[60%]  text-lg focus:outline-none"
          placeholder="Enter City name"
          type="text"
          name="city"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && city.trim()) {
              dispatch(fetchWeatherbyCity(city.trim()));
            }
          }}
        />
        <button
          onClick={() => dispatch(fetchWeatherbyCity(city))}
          className="bg-blue-600 text-white px-6 rounded-md"
        >
          Search
        </button>
        <button
          onClick={() => dispatch(clearWeather())}
          className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-1 rounded-md"
        >
          Clear
        </button>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        {/* Loading */}
        {weather.loading && <Loader />}

        {/* Error */}
        {weather.error && (
          <p className="text-red-300 font-semibold mt-4">{weather.error}</p>
        )}

        {/* Weather Data Display */}
        {weather?.data?.main &&
          weather?.data?.weather &&
          weather?.data?.wind && <GridLayout weather={weather.data} />}
      </div>
      {favourites.cities.length > 0 && (
        <FavouritesGrid favourites={favourites.cities} />
      )}
    </div>
  );
};

export default Weather;
