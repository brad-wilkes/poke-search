import { useAtom } from 'jotai';
import { pokemonFilterAtom } from '../stores/atoms';
import { useSearchAndSetPokemonList } from '../api/endpoints';

export const Input = () => {
  const [pokemonFilter, setPokemonFilter] = useAtom(pokemonFilterAtom);
  const searchAndSetPokemonList = useSearchAndSetPokemonList();

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPokemonFilter(value);
    if (value.trim() !== '') {
      await searchAndSetPokemonList(value);
    }
  };

  return (
    <input value={pokemonFilter} onChange={handleChange} placeholder="Search Pokémon" />
  );
};