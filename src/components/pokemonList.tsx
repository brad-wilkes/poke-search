import React, { useEffect } from 'react';
import { useAtom } from 'jotai';
import pokemondata from '../assets/pokemondata.json'
import { pokemonDataAtom, pokemonListAtom } from '../stores/atoms';


export function PokemonList() {

    const [pokemonData, setPokemonData] = useAtom(pokemonDataAtom);
    const [pokemonList] = useAtom(pokemonListAtom);

    const filteredPokemon = pokemonList.filter.trim() === ''
    ? pokemonData
    : pokemondata.filter((pokemon) => {
        return pokemon.name.english.toLowerCase().includes(pokemonList.filter.toLowerCase());
    });

/** THIS IS FOR USESTATE
 
export function PokemonList({filter}) {
const filteredPokemon = pokemondata.filter ((pokemon) => {
    return pokemon.name.english.toLowerCase().includes(filter.toLowerCase());
});
     This logic for for iterating through data from a URL that is populated into an atom
         const [pokemonList] = useAtom(pokemonListAtom);
         useEffect(() => {
             fetchDataAndPopulateAtom().catch((error) => {
             console.error('Failed to fetch data:', error);
             });
         }, []);
*/

  return (

    <div>
      {filteredPokemon.map((pokemon, index) => (
        <div key={index}>
            <hr />
          {/* <p>Id: {pokemon.id}   </p> */}
          <p>Name: {pokemon.name.english}   </p>
          <p>Type: {pokemon.type.join(', ')}    </p>
        </div>
      ))}
      <hr />
    </div>

    /*
    <div>
      <h2>Pokemon List</h2>
      {pokemonList.map((pokemon, index) => (
        <div key={index}>
          <p>Id: {pokemon.id}</p>
          <p>Name: {pokemon.name ? pokemon.name.english : 'Name Not Available'}</p>
          <p>Type: {Array.isArray(pokemon.type) ? pokemon.type.join(', ') : pokemon.type}</p>
          </div>
      ))}
    </div>
    */
  );
}