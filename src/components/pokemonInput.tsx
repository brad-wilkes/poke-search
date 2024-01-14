import { useAtom } from 'jotai'
import {pokemonDataAtom} from '../stores/atoms'

export const PokemonInput = () => {
    const [pokemon, setPokemon] = useAtom(pokemonDataAtom);

    const handleNameChange = (e: { target: { value: any; }; }) => {
        setPokemon({...pokemon, name: e.target.value});
    };

    const handleTypeChange = (e: { target: { value: any; }; }) => {
        setPokemon({...pokemon, type: e.target.value});
    };

    const handleGenerationChange = (e: { target: { value: any; }; }) => {
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