import { createSlice } from "@reduxjs/toolkit";

const CryptoJS = require("crypto-js");

const initialState = {
  access_token: "",
  user: {
    email: "",
  },
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      console.log("Inside auth State", action.payload);
      state.user.email = action.payload.email;
      state.access_token = state.access_token = CryptoJS.AES.encrypt(
        JSON.stringify("loginToken"),
        "loginKey"
      ).toString();
    },
    logout: (state, action) => {
      state.access_token = null;
    },
  },
});
export const { login, logout } = AuthSlice.actions;
