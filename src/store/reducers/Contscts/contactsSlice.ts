import { IContacts } from '../../../models/IContacts';

interface ContactsState {
    contacts: IContacts[];
    isLoading: boolean;
    error: string;
  }

const initialState: ContactsState = {
    contacts: [],
    isLoading: false,
    error: ''
}