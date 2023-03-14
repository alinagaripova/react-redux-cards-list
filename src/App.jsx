import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Layout } from 'antd';
import PokemonTable from './components/PokemonTable';
import { getPokemons, getPokemonsList } from './store/slices/pokemonSlice';

const { Content } = Layout;

function App() {
  const allPokemonsData = useSelector((state) => state.pokemon.allpokemon);
  const dispatch = useDispatch();

  function getPokemons1() {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((response) => response.json())
      .then((pokemons) => {
        dispatch(getPokemonsList(pokemons.results));
        Promise.all(
          pokemons.results.map(({ url }) => fetch(url).then((resp) => resp.json())),
        ).then((data) => {
          dispatch(getPokemons(data));
        });
      });
  }

  useEffect(() => {
    getPokemons1();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Content
      style={{
        margin: '50px 100px',
      }}
    >
      <div className="App">
        <PokemonTable
          allPokemonsData={allPokemonsData}
          loading={!(allPokemonsData.length > 0)}
        />
      </div>
    </Content>
  );
}

export default App;
