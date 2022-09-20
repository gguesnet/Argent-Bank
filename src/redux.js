import { configureStore, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authentification",
  initialState: { isAuthentificated: false, username: null, token: null },
  reducers: {
    isLoggedIn: (state, action) => {
      state.isAuthentificated = action.payload.isAuthentificated;
      state.username = action.payload.username;
      state.token = action.payload.token;
    },
  },
});

export const { isLoggedIn } = authSlice.actions;

export const store = configureStore({
  reducer: {
    authentification: authSlice.reducer,
  },
});
