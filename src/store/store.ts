import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { setupReducer } from './slices/setupSlice';
import { sortReducer } from './slices/sortSlice';

export const store = configureStore({
  reducer: {
    setup: setupReducer,
    sort: sortReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export function useStoreSelector<K extends keyof RootState>(slice: K) {
  return useSelector((state: RootState) => state[slice]);
}

export function useStoreDispatch() {
  return useDispatch<AppDispatch>();
}
