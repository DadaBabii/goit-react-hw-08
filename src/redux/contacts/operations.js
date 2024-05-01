import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../auth/operations";

// axios.defaults.baseURL = "https://connections-api.herokuapp.com";
//

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkApi) => {
    try {
      const response = await instance.get("/contacts");
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (values, thunkApi) => {
    try {
      const response = await instance.post("/contacts", { ...values });
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkApi) => {
    try {
      const response = await instance.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
