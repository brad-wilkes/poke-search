export interface Pokemon {
    id: number;
    name: string;
    type1: string;
    type2: string | null;
  }

export type PokemonType = {
    name: string,
    type: string,
    generation: string
}

export type PokemonList = Pokemon[];

