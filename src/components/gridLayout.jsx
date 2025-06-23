import React from "react";
import { useDispatch } from "react-redux";
import { addfavourite } from "../features/favouriteSlice";
import { motion } from "framer-motion";

const GridLayout = ({ weather }) => {
  if (!weather) return null;

  const dispatch = useDispatch();

  const {
    name,
    main: { temp, humidity },
    weather: [details],
    wind: { speed },
  } = weather;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full sm:w-[60%] mt-8 p-6 rounded-2xl bg-white/20 backdrop-blur-md shadow-xl text-gray-900 grid grid-cols-1 sm:grid-cols-2 gap-6"
    >
      {/* City */}
      <WeatherCard icon="📍" label="City" value={name} />

      {/* Temperature */}
      <WeatherCard icon="🌡" label="Temperature" value={`${temp}°C`} />

      {/* Humidity */}
      <WeatherCard icon="💧" label="Humidity" value={`${humidity}%`} />

      {/* Wind */}
      <WeatherCard icon="🌬" label="Wind Speed" value={`${speed} m/s`} />

      {/* Condition */}
      <div className="flex flex-col items-center justify-center col-span-1 sm:col-span-2 mt-2">
        <p className="text-xl font-semibold mb-1">☁️ Condition</p>
        <p className="capitalize text-lg">{details.description}</p>
        <img
          src={`https://openweathermap.org/img/wn/${details.icon}@4x.png`}
          alt="weather icon"
          className="w-24 mt-2"
        />
      </div>

      {/* Add to Favourites Button */}
      <div className="col-span-1 sm:col-span-2 flex justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => dispatch(addfavourite(weather))}
          className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition"
        >
          ⭐ Add to Favourites
        </motion.button>
      </div>
    </motion.div>
  );
};

const WeatherCard = ({ icon, label, value }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    className="flex flex-col items-center justify-center p-4 bg-white/30 backdrop-blur-md rounded-xl shadow-sm transition"
  >
    <p className="text-md font-medium">
      {icon} {label}
    </p>
    <p className="text-xl font-semibold mt-1">{value}</p>
  </motion.div>
);

export default React.memo(GridLayout);
