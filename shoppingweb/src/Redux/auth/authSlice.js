import { createSlice } from "@reduxjs/toolkit";
import { CustomToast } from "../../utils/customToast";

const CryptoJS = require("crypto-js");

const initialState = {
  access_token: "U2FsdGVkX187NoJ5/GpgzWgD+GHre+1unBlAj3v7rd8=",
  user: {
    name: "Meet",
    email: "",
    username: "meet2960",
    phone: "1234567890",
    profileImg: "",
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
      CustomToast({
        title: "Login Successfully",
        icon: "success",
        timer: 5000,
      });
    },
    logout: (state, action) => {
      state.access_token = null;
    },
    updateUserData: (state, action) => {
      console.log("Inside Redux", action.payload);
      state.user = action.payload;
    },
  },
});
export const { login, logout, updateUserData } = AuthSlice.actions;
