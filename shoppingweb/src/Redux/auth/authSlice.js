import { createSlice } from "@reduxjs/toolkit";
const CryptoJS = require("crypto-js");

const initialState = {
  access_token: "meetghelani",
  admin: {
    name: "",
    email: "",
  },
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.access_token = state.access_token = CryptoJS.AES.encrypt(
        JSON.stringify("simple_token"),
        "loginKey"
      ).toString();
    },
  },
});
export const { login, logout } = AuthSlice.actions;
