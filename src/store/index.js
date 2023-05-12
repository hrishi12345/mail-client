import { configureStore, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    isLogin: false,
  },
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.isLogin = true;
    },
    logout: (state) => {
      state.token = "";
      state.isLogin = false;
    },
    switchMode: (state) => {
      state.isLogin = !state.isLogin;
    },
    signup: (state, action) => {
      state.token = action.payload.token;
      state.isLogin = true;
    },
  },
});

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export { store };
export const { login, logout, switchMode, signup } = authSlice.actions;
