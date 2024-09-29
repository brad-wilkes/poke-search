import { useAtom } from 'jotai';
import { pokemonDataAtom } from '../stores/atoms';

export function PokemonList() {
  const [pokemonData] = useAtom(pokemonDataAtom);

  console.log('Pokemon Data:', pokemonData); // Debugging log

  return (
    <div>
      {pokemonData.length > 0 ? (
        pokemonData.map((pokemon) => (
          <div key={pokemon.id}>
            <hr />
            <p>Name: {pokemon.name || 'N/A'}</p>
            <p>Type: {[pokemon.type1, pokemon.type2].filter(Boolean).join(', ') || 'N/A'}</p>
          </div>
        ))
      ) : (
        <p>No Pokémon found. Please enter a search term.</p>
      )}
      <hr />
    </div>
  );
}