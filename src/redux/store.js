import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './contacts/slice';

export const store = configureStore({
  reducer: {
    contactData: contactsReducer,
  },
});
