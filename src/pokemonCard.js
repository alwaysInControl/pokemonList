import {useState, useEffect} from 'react'
import axios from 'axios'

const PokemonCard = ({name, url}) => {
  const [pokemonData, setPokemonData] = useState()

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setPokemonData(response.data)
      })
      .catch(err => {
        console.error('Ошибка запроса', err)
      })
  }, [url])
  console.log(pokemonData)

  return (
    <div className='pokemon_card'>
      {pokemonData && pokemonData.sprites && (
        <img src={pokemonData.sprites.front_default} alt={name}/>
      )}
      <h2>{name}</h2>
    </div>
  );
};

export default PokemonCard;
