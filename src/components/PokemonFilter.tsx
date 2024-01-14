import React from 'react';
import { useAtom } from 'jotai';
import { pokemonDataAtom } from '../stores/atoms';

export const PokemonFilter = () => {
    const [pokemonList, setPokemonList] = useAtom(pokemonDataAtom);

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const updatedPokemonList = [...pokemonList];
        if (updatedPokemonList.length > 0) {
            // Assuming 'name' is a string property
            updatedPokemonList[0].name.english = e.target.value;
            setPokemonList(updatedPokemonList);
        }
    };

    const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const updatedPokemonList = [...pokemonList];
        if (updatedPokemonList.length > 0) {
            // Assuming 'type' is a string or an array property
            updatedPokemonList[0].type = e.target.value;
            setPokemonList(updatedPokemonList);
        }
    };

    return (
        <div>
            <input value={pokemonList[0]?.name?.english || ''} onChange={handleNameChange} placeholder='Name' />
            <input value={pokemonList[0]?.type || ''} onChange={handleTypeChange} placeholder='Type' />
        </div>
    );
};
