import { configureStore } from '@reduxjs/toolkit';
import notesReducers from './notes/slice';

export const store = configureStore({
  reducer: { notes: notesReducers },
});
