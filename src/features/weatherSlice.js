import { LocationCity } from "@mui/icons-material";
import axios from "axios";
import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";

const weatherUrl = import.meta.env.VITE_API_URL;
const api = import.meta.env.VITE_WEATHER_API;

export const fetchWeatherbyCity = createAsyncThunk(
  "weather/fetchWeatherbyCity",
  async (city, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${weatherUrl}q=${city}&appid=${api}&units=metric`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message || "Error fetching weather data");
    }
  }
);

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    clearWeather: (state) => {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherbyCity.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeatherbyCity.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchWeatherbyCity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch weather data";
      });
  },
});

export const { clearWeather } = weatherSlice.actions;
export default weatherSlice.reducer;
