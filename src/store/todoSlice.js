import { createSlice } from '@reduxjs/toolkit';

const initialState = { todos: [] };

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(JSON.parse(action.payload));
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      todo.done = !todo.done;
    },
    clearCompleted: (state) => {
      state.todos = state.todos.filter((todo) => !todo.done);
    },
  },
});

export const { addTodo, removeTodo, toggleTodo, clearCompleted } = todoSlice.actions;

export default todoSlice.reducer;
