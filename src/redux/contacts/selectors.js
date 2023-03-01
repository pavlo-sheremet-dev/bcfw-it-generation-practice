import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contactData.contacts.items;
export const selectLoading = state => state.contactData.contacts.isLoading;
export const selectError = state => state.contactData.contacts.error;
export const selectFilter = state => state.contactData.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().trim().includes(filter.toLowerCase())
    );
  }
);
