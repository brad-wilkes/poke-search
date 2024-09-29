import { Pokemon } from '../types/pokemon';


export const fetchPokemonList = async () => {
  const response = await fetch('/pokesearch/list/');
  if (!response.ok) {
      throw new Error('Failed to fetch Pokémon list');
  }
  return response.json();
};

export const searchPokemon = async (query: string) => {
  const response = await fetch(`/pokesearch/search/?q=${query}`);
  if (!response.ok) {
      throw new Error('Failed to search Pokémon');
  }
  return response.json();
};