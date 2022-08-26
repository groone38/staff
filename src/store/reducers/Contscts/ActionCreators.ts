import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchUsers = createAsyncThunk(
    "user/fetchAll",
    async (_, thunkAPI) => {
      try {
        const responce = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        return responce.data;
      } catch (error: any) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  