import './App.css'
import React, { useState } from 'react'
import { useAtom } from 'jotai'
import { pokemonAtom, pokemonListAtom } from './stores/atoms'
import { Input } from './components/input'
import { PokemonInput } from './components/pokemonInput'
import { PokemonList } from './components/pokemonList'

const App: React.FC = () => {
  const [pokemon] = useAtom(pokemonAtom);
  const [pokemonList] = useAtom(pokemonListAtom);
  const [filter, setFilter] = useState('');

  return (
    <>
        <h2><u>
      Pokemon List
        </u></h2>

      <Input />
        <br/><br/>

      <PokemonList />

        {/* <h2>Pokemon Details</h2>
      <PokemonInput/>
        <p>Name: {pokemon.name}</p>
        <p>Type: {pokemon.type}</p>
        <p>Generation: {pokemon.generation}</p> */}

    </>
  )
}

export default App
