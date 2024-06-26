import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const instance = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
});

export const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  instance.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (formData, thunkApi) => {
    try {
      const response = await instance.post("/users/signup", formData);
      console.log("data:", response.data);
      setToken(response.data.token);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (formData, thunkApi) => {
    try {
      const response = await instance.post("/users/login", formData);
      console.log("data:", response.data);
      setToken(response.data.token);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const token = state.auth.token;

      setToken(token);
      const { data } = await instance.get("/users/current");
      console.log("REFRESH data: ", data);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkApi) => {
  try {
    const response = await instance.post("/users/logout");
    console.log("data:", response.data);
    clearToken();
    return;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
