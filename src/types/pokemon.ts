export interface Pokemon {
    name:string;
    type: string;
    generation: number;
}

export type PokemonType = {
    name: string,
    type: string,
    generation: string
}

export type PokemonList = Array<{
    id: number;
    name: { english?: string; japanese?: string; chinese?: string; french?: string };
    type: string | string[];
}>;
