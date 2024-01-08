import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todoSlice';

export const todoStore = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
