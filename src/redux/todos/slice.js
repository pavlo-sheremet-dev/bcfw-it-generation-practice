import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  editingTodo: null,
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, { payload }) => {
        state.items = [payload, ...state.items];
      },
      prepare: newTodo => {
        return {
          payload: { ...newTodo, id: nanoid() },
        };
      },
    },
    deleteTodo: (state, { payload }) => {
      state.items = state.items.filter(todo => todo.id !== payload);
    },
    editTodo: (state, { payload }) => {
      state.items = state.items.map(todo =>
        todo.id !== payload.id ? todo : payload
      );
    },
    toggleEditTodo: (state, { payload }) => {
      state.editingTodo = payload ? payload : null;
    },
  },
});

export const todosReducer = todosSlice.reducer;

export const { addTodo, deleteTodo, editTodo, toggleEditTodo } =
  todosSlice.actions;
