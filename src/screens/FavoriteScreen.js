import { Text } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import {getPokemonsFavoriteApi} from '../api/favorite'
import useAuth from '../hooks/useAuth'
import { getPokemonDetail } from '../api/pokemon'
import PokemonList from '../components/PokemonList'
import { useFocusEffect } from '@react-navigation/native'
import NoLogged from '../components/NoLogged'

export default function FavoriteScreen() {

  const [pokemons, setPokemons] = useState([])

  const { auth } = useAuth()

  useFocusEffect(
    useCallback(() => {
      if(auth){
        (async () => {
          const response = await getPokemonsFavoriteApi()
          const pokemonArray = []
  
          for await (const pokemonItem of response){
            const pokemonDetail = await getPokemonDetail(pokemonItem)

            pokemonArray.push({
              id: pokemonDetail.id,
              name: pokemonDetail.name,
              type: pokemonDetail.types[0].type.name,
              order: pokemonDetail.order,
              imagen: pokemonDetail.sprites.other['official-artwork'].front_default
            })
            setPokemons([...pokemons, ...pokemonArray])
          }
        })()
      }
    }, [auth])
  )
  
  return !auth ? (
    <NoLogged/>
  ) : (
    <PokemonList pokemon={pokemons}/>
  )
}