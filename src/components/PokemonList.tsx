import { useAtom } from 'jotai';
import pokemondata from '../assets/pokemondata.json'
import { pokemonDataAtom, pokemonListAtom } from '../stores/atoms';


export function PokemonList() {

    const [pokemonData] = useAtom(pokemonDataAtom);
    const [pokemonList] = useAtom(pokemonListAtom);

    const filteredPokemon = pokemonList.filter.trim() === ''
    ? pokemonData
    : pokemondata.filter((pokemon) => {
        return pokemon.name.english.toLowerCase().includes(pokemonList.filter.toLowerCase());
    });


  return (

    <div>
      {filteredPokemon.map((pokemon, index) => (
        <div key={index}>
            <hr />
          {/* <p>Id: {pokemon.id}   </p> */}
          <p>Name: {pokemon.name.english}   </p>
          <p>Type: {pokemon.type.join(', ')}    </p>
        </div>
      ))}
      <hr />
    </div>
  );
}