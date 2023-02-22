import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  editingTodo: null,
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.items = [action.payload, ...state.items];
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter(todo => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      state.items = state.items.map(todo =>
        todo.id !== action.payload.id ? todo : action.payload
      );
    },
    toggleEditTodo: (state, action) => {
      state.editingTodo = action.payload ? action.payload : null;
    },
  },
});

export const todosReducer = todosSlice.reducer;

export const { addTodo, deleteTodo, editTodo, toggleEditTodo } =
  todosSlice.actions;
