import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  cities: [],
};

export const favouritesSlice = createSlice({
  name: "Favourities",
  initialState,
  reducers: {
    addfavourite: (state, action) => {
      const city = { ...action.payload, id: nanoid() };
      if (!state.cities.find((c) => c.name === city.name)) {
        state.cities.push(city);
      }
    },
    removefavourite: (state, action) => {
      const cityId = action.payload;
      if (!state.cities.find((c) => c.id === cityId)) {
        state.cities = state.cities.filter((c) => c.id !== cityId);
      }
    },
  },
});

export const { addfavourite, removefavourite } = favouritesSlice.actions;
export default favouritesSlice.reducer;
