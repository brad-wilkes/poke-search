import './App.css'
import React, { useState } from 'react'
import { Input } from './components/input'
import { PokemonList } from './components/PokemonList.tsx'

const App: React.FC = () => {


  return (
    <>
        <h2><u>
      Pokemon List
        </u></h2>

      <Input />
        <br/><br/>

      <PokemonList />

    </>
  )
}

export default App
