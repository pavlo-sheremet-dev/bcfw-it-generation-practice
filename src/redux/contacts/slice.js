import { createSlice } from '@reduxjs/toolkit';

import { addContact, deleteContact, fetchContacts } from './operations';

const initialState = {
  contacts: {
    items: [],
  },
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',

  initialState,

  reducers: {
    handleFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, pendingHandler)
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.items = payload;
      })
      .addCase(fetchContacts.rejected, rejectHandler)

      .addCase(addContact.pending, pendingHandler)
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.items = [...state.contacts.items, payload];
      })
      .addCase(addContact.rejected, rejectHandler)

      .addCase(deleteContact.pending, pendingHandler)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== action.payload
        );
      })
      .addCase(deleteContact.rejected, rejectHandler);
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

export const contactsReducer = contactsSlice.reducer;
export const { handleFilter } = contactsSlice.actions;
