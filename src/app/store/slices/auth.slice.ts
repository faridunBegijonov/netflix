import { createSlice } from "@reduxjs/toolkit";

interface IAuthSlice {
  firstName: string;
  email: string;
  password: number | null;
}

const initialState: IAuthSlice = {
  email: "",
  firstName: "",
  password: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      localStorage.setItem("userNetflix", JSON.stringify(payload));
      state.email = payload.email;
      state.firstName = payload.firstName;
      state.password = payload.password;
    },
    goOut: (state) => {
      localStorage.clear();
      state.email = "";
      state.firstName = "";
      state.password = null;
    },
  },
});

export const { login, goOut } = authSlice.actions;
