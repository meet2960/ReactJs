import { combineReducers } from "redux";
import { weatherSlice } from "./current/currentSlice";
import { commonSlices } from "./common/commonSlice";
export const rootReducer = combineReducers({
  common: commonSlices.reducer,
  currentWeather: weatherSlice.reducer,
});
