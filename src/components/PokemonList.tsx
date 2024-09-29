import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { pokemonDataAtom, pokemonFilterAtom } from '../stores/atoms';
import { fetchPokemonList } from '../api/endpoints';

export function PokemonList() {
  const [pokemonData, setPokemonData] = useAtom(pokemonDataAtom);
  const [pokemonFilter] = useAtom(pokemonFilterAtom);

  useEffect(() => {
    const fetchAndSetPokemonList = async () => {
      try {
        const data = await fetchPokemonList();
        setPokemonData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAndSetPokemonList();
  }, [setPokemonData]);

  const filteredPokemon = pokemonFilter.trim() === ''
    ? pokemonData
    : pokemonData.filter((pokemon) => {
        return pokemon.name.english?.toLowerCase().includes(pokemonFilter.toLowerCase());
      });

  return (
    <div>
      {filteredPokemon.map((pokemon, index) => (
        <div key={index}>
          <hr />
          <p>Name: {pokemon.name.english}</p>
          <p>Type: {Array.isArray(pokemon.type) ? pokemon.type.join(', ') : pokemon.type}</p>
        </div>
      ))}
      <hr />
    </div>
  );
}