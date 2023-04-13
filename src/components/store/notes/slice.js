import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE_NOTES } from '../../../constans/constantNotes';

const notesSlice = createSlice({
  name: 'notes',
  initialState: INITIAL_STATE_NOTES,
  reducers: {
    // noteById: (state, action) => {},
  },
});

export const { noteById } = notesSlice.actions;
export default notesSlice.reducer;
