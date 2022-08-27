import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IContacts } from "../../../models/IContacts";
import { createContacts, deleteContacts, fetchUsers } from "./ActionCreators";

interface ContactsState {
  contacts: IContacts[];
  isLoading: boolean;
  error: string;
}

const initialState: ContactsState = {
  contacts: [],
  isLoading: false,
  error: "",
};

export const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.fulfilled.type]: (
      state,
      action: PayloadAction<IContacts[]>
    ) => {
      state.isLoading = false;
      state.error = "";
      state.contacts = action.payload;
    },
    [fetchUsers.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = "Не верно введены данные";
    },
    [createContacts.fulfilled.type]: (state) => {
      state.isLoading = false;
      state.error = "";
    },
    [createContacts.pending.type]: (state) => {
      state.isLoading = true;
    },
    [createContacts.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = "Не верно введены данные";
    },
  },
});

export default contactSlice.reducer;
