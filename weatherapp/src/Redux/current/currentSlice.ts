import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  searchCity: "",
  weatherData: {},
  errorMessage: "",
};

export const weatherSlice = createSlice({
  name: "current",
  initialState: initialState,
  reducers: {
    setCityValue: (state, action) => {
      state.searchCity = action.payload;
    },
    setWeather: (state, action) => {
      console.log("Inside Set Weather", action.payload);
      state.weatherData = action.payload;
    },
    setCityNotFoundError: (state, action) => {
      console.log("Inside City Not Found", action);

      state.errorMessage = action.payload;
    },
  },
});
export const { setCityValue } = weatherSlice.actions;
