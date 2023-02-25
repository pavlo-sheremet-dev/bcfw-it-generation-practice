import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { globalSlice } from './global/slice';

import storage from 'redux-persist/lib/storage';

const persistedGlobalReducer = persistReducer(
  { key: 'global__JFrh', whitelist: ['themeTitle'], storage },
  globalSlice.reducer,
);

const rootReducer = combineReducers({
  [globalSlice.name]: persistedGlobalReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
