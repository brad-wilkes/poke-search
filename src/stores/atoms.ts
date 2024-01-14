import {atom} from 'jotai'
import {PokemonList} from '../types/pokemon'

export const pokemonDataAtom = atom<PokemonList>([])
export const pokemonListAtom = atom({ filter: '' } as { filter: string });
export const textAtom= atom('hello')