import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_SORT_SELECTED_ELEMENTS_AMOUNT, SortAlgo } from '../../constants/config';

export interface SetupState {
  elementsLength: number;
  selectedAlgo: SortAlgo;
}

const initialState: SetupState = {
  elementsLength: DEFAULT_SORT_SELECTED_ELEMENTS_AMOUNT,
  selectedAlgo: SortAlgo.BUBBLE,
};

export const setupSlice = createSlice({
  name: 'setup',
  initialState,
  reducers: {
    toggleSortAlgo(state, action: PayloadAction<SortAlgo>) {
      state.selectedAlgo = action.payload;
    },
    updateElementsLength(state, action: PayloadAction<number>) {
      state.elementsLength = action.payload;
    },
  },
});

export const { toggleSortAlgo, updateElementsLength } = setupSlice.actions;
export const setupReducer = setupSlice.reducer;
