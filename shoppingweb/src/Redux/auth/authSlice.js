import { createSlice } from "@reduxjs/toolkit";

const CryptoJS = require("crypto-js");

const initialState = {
  access_token: "",
  user: {
    email: "",
    password: "",
  },
  /*   admin: {
    name: "",
    email: "",
  }, */
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      console.log("Inside auth State", action.payload);
      state.user.email = action.payload.email;
      state.user.password = action.payload.password;

      /*   state.access_token = state.access_token = CryptoJS.AES.encrypt(
        JSON.stringify("loginToken"),
        "loginKey"
      ).toString(); */
    },
  },
});
export const { login, logout } = AuthSlice.actions;
