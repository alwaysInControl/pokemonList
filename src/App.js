import {useState, useEffect} from 'react'
import axios from 'axios'
import PokemonCard from './pokemonCard'
import './App.css'

const App = () => {
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(response => {
        setPokemonList(response.data.results)
      })
      .catch(err => {
        console.error('Ошибка запроса', err)
      })
  }, [])
  console.log(pokemonList)

  return (
    <div>
      <h1>Pokemons</h1>
      <div className='pokemon_list'>
        {pokemonList.map(pokemon => (
          <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url}/>
        ))}
      </div>
    </div>
  );
};

export default App;
