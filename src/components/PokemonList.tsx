import { useAtom } from 'jotai';
import pokemondata from '../assets/pokemondata.json'
import { pokemonDataAtom, pokemonFilterAtom } from '../stores/atoms';

export function PokemonList() {

    const [pokemonData] = useAtom(pokemonDataAtom);
    const [pokemonFilter] = useAtom(pokemonFilterAtom);

    const filteredPokemon = pokemonFilter.filter.trim() === ''
    ? pokemonData
    : pokemondata.filter((pokemon) => {
        return pokemon.name.english.toLowerCase().includes(pokemonFilter.filter.toLowerCase());
    });

  return (

    <div>
      {filteredPokemon.map((pokemon, index) => (
        <div key={index}>
            <hr />
          {/* <p>Id: {pokemon.id}   </p> */}
          <p>Name: {pokemon.name.english}   </p>
          <p>Type: {Array.isArray(pokemon.type) ? pokemon.type.join(', ') : pokemon.type}    </p>
        </div>
      ))}
      <hr />
    </div>
  );
}