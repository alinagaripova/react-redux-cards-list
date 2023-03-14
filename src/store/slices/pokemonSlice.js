import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allpokemon: [],
  pokemonsList: [],
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    getPokemons: (state, action) => {
      state.allpokemon = action.payload;
    },
    getPokemonsList: (state, action) => {
      state.pokemonsList = action.payload;
    },
  },
});

export const { getPokemons, getPokemonsList } = pokemonSlice.actions;

export const selectCount = (state) => state.counter.value;

export default pokemonSlice.reducer;
