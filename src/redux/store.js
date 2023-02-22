import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from './todos/slice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
