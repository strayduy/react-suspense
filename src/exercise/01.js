// Simple Data-fetching
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'
import {PokemonDataView, fetchPokemon} from '../pokemon'

let pokemon;

const handleSuccess = (response) => {
    pokemon = response;
};

const pokemonPromise = fetchPokemon('pikachu').then(handleSuccess);

function PokemonInfo() {
  if (!pokemon) {
      throw pokemonPromise;
  }

  // if the code gets it this far, then the pokemon variable is defined and
  // rendering can continue!
  return (
    <div>
      <div className="pokemon-info__img-wrapper">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <PokemonDataView pokemon={pokemon} />
    </div>
  )
}

function App() {
  return (
    <div className="pokemon-info-app">
      <div className="pokemon-info">
        <React.Suspense fallback={<div>loading...</div>}>
          <PokemonInfo />
        </React.Suspense>
      </div>
    </div>
  )
}

export default App
