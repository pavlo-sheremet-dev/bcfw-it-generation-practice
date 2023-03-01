// import { addContact, deleteContact, fetchContacts } from

import {
  addContact,
  deleteContact,
  fetchContacts,
} from 'redux/contacts/operations';

const extraActions = [addContact, deleteContact, fetchContacts];

const { createSlice } = require('@reduxjs/toolkit');

export const globalSlice = createSlice({
  name: 'global',
  initialState: {
    themeTitle: 'light',
    error: null,
    isLoading: false,
  },
  reducers: {},
  extraReducers: buider => {
    buider
      .addCase(addContact.pending, pendingHandler)
      .addCase(addContact.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(addContact.rejected, rejectHandler);
  },
});

function pendingHandler(state) {
  state.contacts.isLoading = true;
  state.contacts.error = null;
}

function rejectHandler(state, action) {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
}
