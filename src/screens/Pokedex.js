import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getPokemonApi, getPokemonDetailsByUrlApi } from '../api/pokemon'
import PokemonList from '../components/PokemonList'

export default function Pokedex() {

  const [pokemon, setPokemon] = useState([])
  const [nextUrl, setNextUrl] = useState(null)

  useEffect(() => {
    (async ()=>{
      try {
        await loadPokemon()
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])
  const loadPokemon = async () =>{
    try {
      const response = await getPokemonApi(nextUrl)
      setNextUrl(response.next)
      const pokemonArray = []

      for await (const pokemonItem of response.results){
        const pokemonDetail = await  getPokemonDetailsByUrlApi(pokemonItem.url)
        
        pokemonArray.push({
          id: pokemonDetail.id,
          name: pokemonDetail.name,
          type: pokemonDetail.types[0].type.name,
          order: pokemonDetail.order,
          imagen: pokemonDetail.sprites.other['official-artwork'].front_default
        })
        setPokemon([...pokemon, ...pokemonArray])
      }
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <View>
      <PokemonList pokemon={pokemon} loadPokemon={loadPokemon} isNext={nextUrl}/>
    </View>
  )
}