import { configureStore } from '@reduxjs/toolkit';
import pokemon from './slices/pokemonSlice';

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: {
    pokemon,
  },
});
