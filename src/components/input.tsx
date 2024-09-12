import { useAtom } from 'jotai';
import { pokemonFilterAtom } from '../stores/atoms';

/** THIS IS FOR USEEFFECT AND USESTATE

export const Input = ({ setFilter }) => {
 const [filter, setLocalFilter] = useState('');
 const value = e.target.value;
    setLocalFilter(value); // Update local filter state
    setFilter(value); // Pass the filter value to the parent component
*/

export const Input = () => {
const [pokemonFilter, setPokemonFilter] = useAtom(pokemonFilterAtom);

  const handleChange = (e: { target: { value: any; }; }) => {
    const value = e.target.value;
    setPokemonFilter((prev) => ({ ...prev, filter: value}))

  };

  return (
    <input value={pokemonFilter.filter} onChange={handleChange} />
  );

};


