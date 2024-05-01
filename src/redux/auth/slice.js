import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refreshUser, register } from "./operations";

const auth_INITIAL_STATES = {
  isSignedin: false,
  userData: null,
  token: null,
  loading: false,
  error: false,
};

const authSlice = createSlice({
  // Ім'я слайсу
  name: "auth",
  // Початковий стан редюсера слайсу
  initialState: auth_INITIAL_STATES,
  // Об'єкт редюсерів
  extraReducers: (builder) =>
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.isSignedin = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(register.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.isSignedin = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(refreshUser.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isSignedin = true;
        state.userData = action.payload;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(logout.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(logout.fulfilled, () => {
        return auth_INITIAL_STATES;
      })
      .addCase(logout.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});
export const authReducer = authSlice.reducer;
