import {atom} from 'jotai'
import {PokemonListArray} from '../types/pokemon'

export const pokemonDataAtom = atom<PokemonListArray>([])
export const pokemonListAtom = atom({ filter: '' } as { filter: string });
export const textAtom= atom('hello')