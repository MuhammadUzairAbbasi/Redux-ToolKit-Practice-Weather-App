import React from "react";
import { useDispatch } from "react-redux";
import { removefavourite } from "../features/favouriteSlice";
import { motion } from "framer-motion";

const FavouritesGrid = ({ favourites }) => {
  const dispatch = useDispatch();

  if (!favourites || favourites.length === 0) {
    return (
      <div className="text-white text-lg mt-4 text-center">
        No favourites added yet.
      </div>
    );
  }

  return (
    <div className="w-full mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {favourites.map((weather, index) => {
        const {
          name,
          main: { temp, humidity },
          weather: [details],
          wind: { speed },
        } = weather;

        return (
          <motion.div
            key={`${name}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/20 backdrop-blur-md rounded-xl p-4 shadow-md text-black"
          >
            <h2 className="text-xl font-semibold mb-2 text-center">{name}</h2>

            <div className="text-sm space-y-1">
              <p>
                🌡 Temp: <strong>{temp}°C</strong>
              </p>
              <p>
                💧 Humidity: <strong>{humidity}%</strong>
              </p>
              <p>
                🌬 Wind: <strong>{speed} m/s</strong>
              </p>
              <p>
                ☁️ Condition: <strong>{details.description}</strong>
              </p>
            </div>

            <div className="flex justify-center mt-2">
              <img
                src={`https://openweathermap.org/img/wn/${details.icon}@2x.png`}
                alt="weather icon"
                className="w-16"
              />
            </div>

            <div className="mt-4 flex justify-center">
              <button
                onClick={() => dispatch(removefavourite(weather.id))}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
              >
                ❌ Remove
              </button>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default FavouritesGrid;
