import { configureStore, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authentification",
  initialState: {
    isAuthentificated: false,
    email: null,
    firstname: null,
    lastname: null,
    token: null,
  },
  reducers: {
    isLoggedIn: (state, action) => {
      state.isAuthentificated = action.payload.isAuthentificated;
      state.email = action.payload.email;
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;
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
