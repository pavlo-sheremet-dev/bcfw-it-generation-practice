import { configureStore } from '@reduxjs/toolkit';
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
import { todosReducer } from './todos/slice';

import storage from 'redux-persist/lib/storage';

const persistedTodosReducer = persistReducer(
  { key: 'todos', storage, whitelist: ['items'] },
  todosReducer
);

export const store = configureStore({
  reducer: {
    todos: persistedTodosReducer,
  },
  // devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
