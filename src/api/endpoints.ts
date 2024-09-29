import { PokemonList } from '../types/pokemon';
import { pokemonDataAtom } from '../stores/atoms';
import { useSetAtom } from 'jotai';

const BASE_URL = 'http://localhost:8000';

export const searchPokemon = async (query: string = ''): Promise<PokemonList> => {
  const response = await fetch(`${BASE_URL}/pokesearch/search/?q=${query}`);
  if (!response.ok) {
    throw new Error('Failed to search Pokémon');
  }
  const data: PokemonList = await response.json();
  return data;
};

// Function to update atoms
export const useSearchAndSetPokemonList = () => {
  const setPokemonData = useSetAtom(pokemonDataAtom);

  const searchAndSetPokemonList = async (query: string) => {
    try {
      const data = await searchPokemon(query);
      setPokemonData(data);
    } catch (error) {
      console.error(error);
    }
  };

  return searchAndSetPokemonList;
};