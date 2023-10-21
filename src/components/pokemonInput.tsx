import { atom, useAtom } from 'jotai'
import {pokemonAtom} from '../stores/atoms'

export const PokemonInput = () => {
    const [pokemon, setPokemon] = useAtom(pokemonAtom);

    const handleNameChange = (e) => {
        setPokemon({...pokemon, name: e.target.value});
    };

    const handleTypeChange = (e) => {
        setPokemon({...pokemon, type: e.target.value});
    };

    const handleGenerationChange = (e) => {
        setPokemon({...pokemon, generation: e.target.value});
    };

    return (
        <div>
        <input value={pokemon.name} onChange={handleNameChange} placeholder='Name' />
        <input value={pokemon.type} onChange={handleTypeChange} placeholder='Type' />
        <input value={pokemon.generation} onChange={handleGenerationChange} placeholder='Generation' />
        </div>
    );
};