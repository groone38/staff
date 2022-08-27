import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IContacts } from "./../../../models/IContacts";

interface Login {
  email: string;
  password: string;
}

export const auth = createAsyncThunk(
  "auth/fetch",
  async (value: Login, thunkAPI) => {
    try {
      const { data } = await axios.get<IContacts[]>(
        `http://localhost:3001/users?email_like=${value.email}`
      );
      console.log(data);
      if (data[0].password === value.password) {
        window.localStorage.setItem("user", `${data[0].id}`);
      }
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
