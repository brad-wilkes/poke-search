import { useAtom } from 'jotai';
import { pokemonListAtom } from '../stores/atoms';

/** THIS IS FOR USEEFFECT AND USESTATE

export const Input = ({ setFilter }) => {
 const [filter, setLocalFilter] = useState('');
 const value = e.target.value;
    setLocalFilter(value); // Update local filter state
    setFilter(value); // Pass the filter value to the parent component
*/

export const Input = () => {
const [pokemonList, setPokemonList] = useAtom(pokemonListAtom);

  const handleChange = (e: { target: { value: any; }; }) => {
    const value = e.target.value;
    setPokemonList((prev) => ({ ...prev, filter: value}))

  };

  return (
    <input value={pokemonList.filter} onChange={handleChange} />
  );

};


