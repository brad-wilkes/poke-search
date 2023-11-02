import {atom} from 'jotai'
// import pokemondata from '../assets/pokemondata.json'
// import { fetchGistData, gistId } from '../api/endpoints';


// export const pokemonAtom:PokemonList = atom([]);
export const pokemonDataAtom = atom([])
export const pokemonListAtom = atom({ filter: '' });
export const textAtom= atom('hello')
export const uppercaseAtom = atom(
    (get) => get(textAtom).toUpperCase()
)

// export async function fetchDataAndPopulateAtom() {
//     try {
//       const gistData = await fetchGistData(gistId);
//       const parsedData = JSON.parse(gistData);

//       if (Array.isArray(parsedData)) {
//         // If the parsed data is an array, iterate through it and update the atom
//         const setPokemonList = useSetAtom(pokemonListAtom);
//         setPokemonList(() => parsedData);
//       } else {
//         console.error('Parsed data is not an array of Pokemon.');
//       }

//     } catch (error) {
//       console.error('Error:', error);
//       throw error;
//     }
//   }