import { configureStore } from "@reduxjs/toolkit";
import WeatherReducer from "../features/weatherSlice";
import FavouritesReducer from "../features/favouriteSlice";

export const store = configureStore({
  reducer: {
    weather: WeatherReducer,
    favourites: FavouritesReducer,
  },
});
