import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchUsers = createAsyncThunk(
    "user/fetchAll",
    async (_, thunkAPI) => {
      try {
        const responce = await axios.get(
          `http://localhost:3001/users`
        );
        return responce.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  interface DataCreate {
    email: string
    name: string
    number: number | null
    company: string
    id?: null | number;
  }

  export const createContacts = createAsyncThunk(
    "user/create",
    async (data: DataCreate, thunkAPI) => {
      try {
        const responce = await axios.post(
          `http://localhost:3001/users`, {...data}
        );
        return responce.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const editContact = createAsyncThunk(
    "user/edit",
    async (data: DataCreate, thunkAPI) => {
      try {
        const responce = await axios.put(
          `http://localhost:3001/users/${data.id}`, {...data}
        );
        return responce.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  )

  export const deleteContacts = createAsyncThunk(
    "user/delete",
    async (id:  number | null | undefined, thunkAPI) => {
      try {
        const responce = await axios.delete(
          `http://localhost:3001/users/${id}`
        );
        return responce.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );