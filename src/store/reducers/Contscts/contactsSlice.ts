import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IContacts } from "../../../models/IContacts";
import { deleteContacts, fetchUsers } from "./ActionCreators";

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
    // [deleteContacts.fulfilled.type]: (state) => {
    //   state.isLoading = false;
    // },
    // [deleteContacts.pending.type]: (state) => {
    //   state.isLoading = true;
    // },
    // [deleteContacts.rejected.type]: (state) => {
    //   state.isLoading = false;
    // },
  },
});

export default contactSlice.reducer;
