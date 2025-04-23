import { createSlice } from '@reduxjs/toolkit';

export interface SortState {
  isSortRunning: boolean;
}

const initialState: SortState = {
  isSortRunning: false,
};

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    start(state) {
      state.isSortRunning = true;
    },
    stop(state) {
      state.isSortRunning = false;
    },
  },
});

export const { start: startSort, stop: stopSort } = sortSlice.actions;
export const sortReducer = sortSlice.reducer;
