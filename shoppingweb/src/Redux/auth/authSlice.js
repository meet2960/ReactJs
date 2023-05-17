import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  access_token: null,
  admin: {
    name: "",
    email: "",
  },
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state, action) => {},
  },
});
