import { configureStore, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    email:"",
    isLogin: false,
  },
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.isLogin = true;
      state.email=action.payload.email;
  
    },
    logout: (state) => {
      state.token = "";
      state.isLogin = false;
      state.email=""
    },
    switchMode: (state) => {
      state.isLogin = !state.isLogin;
    },
    signup: (state, action) => {
      state.token = action.payload.token;
      state.isLogin = true;
      state.email=action.payload.email;
  
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
