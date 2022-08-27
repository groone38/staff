
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IContacts } from './../../../models/IContacts';
import { auth } from './actionCreators';

interface UserState {
    user: IContacts;
    isLoading: boolean;
    error: string;
  }

const initialState: UserState = {
    user: {
        email: '',
        name: '',
        company: '',
        number: 0
    },
    isLoading: false,
    error: ''
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.user = {
                email: '',
                company: '',
                name: '',
                number: 0
            }
            state.error = ''
            state.isLoading = false
        }
    },
    extraReducers: {
      [auth.fulfilled.type]: (state, action: PayloadAction<IContacts>) => {
        state.isLoading = false;
        state.error = "";
        state.user = action.payload;
      },
      [auth.pending.type]: (state) => {
        state.isLoading = true;
      },
      [auth.rejected.type]: (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = 'Не верно введены данные';
      },
    },
  });
  
  export default authSlice.reducer;
  
  export const {logout} = authSlice.actions