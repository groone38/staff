import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import authReducer from "./reducers/Auth/authSlice";
import contactReducer from "./reducers/Contscts/contactsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactReducer
  },
});

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export type RootState = ReturnType<typeof store.getState>;
