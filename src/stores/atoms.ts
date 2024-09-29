import {atom} from 'jotai'
import {PokemonList} from '../types/pokemon'

export const pokemonDataAtom = atom<PokemonList>([])
export const pokemonFilterAtom = atom<string>('');
export const filteredPokemonDataAtom = atom<PokemonList>((get) => {
    const filter = get(pokemonFilterAtom).trim().toLowerCase();
    const data = get(pokemonDataAtom);
    return filter === ''
      ? data
      : data.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(filter)
        );
  });