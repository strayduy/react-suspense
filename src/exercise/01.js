// Simple Data-fetching
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'
import {PokemonDataView, PokemonErrorBoundary, fetchPokemon} from '../pokemon'

let pokemon;
let error;

const handleSuccess = (response) => {
    pokemon = response;
};

const handleError = (err) => {
    error = err;
};

const pokemonPromise = fetchPokemon('pikachu').then(handleSuccess, handleError);

function PokemonInfo() {
  if (error) {
    throw error;
  }

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
        <PokemonErrorBoundary>
          <React.Suspense fallback={<div>loading...</div>}>
            <PokemonInfo />
          </React.Suspense>
        </PokemonErrorBoundary>
      </div>
    </div>
  )
}

export default App
