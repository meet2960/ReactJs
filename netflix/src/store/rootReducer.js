import { combineReducers } from "@reduxjs/toolkit";
import { homeSlice } from "../reducers/home/homeSlice";
import storage from "redux-persist/lib/storage";
import sessionStorage from "redux-persist/lib/storage/session";
import { persistReducer } from "redux-persist";

const trendingPersist = {
  key: "trending",
  storage: sessionStorage, // use Session Storage here
};

export const rootReducer = combineReducers({
  // home: homeSlice.reducer,
  home: persistReducer(trendingPersist, homeSlice.reducer),
});
