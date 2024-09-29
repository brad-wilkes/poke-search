import { useAtom } from 'jotai';
import { pokemonFilterAtom } from '../stores/atoms';
import { useSearchAndSetPokemon } from '../api/endpoints';

export const Input = () => {
  const [pokemonFilter, setPokemonFilter] = useAtom(pokemonFilterAtom);
  const searchAndSetPokemon = useSearchAndSetPokemon();

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPokemonFilter(value);
    await searchAndSetPokemon(value);
  };

  return (
    <input value={pokemonFilter} onChange={handleChange} placeholder="Search Pokémon" />
  );
};