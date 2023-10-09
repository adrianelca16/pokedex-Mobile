import { ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getPokemonDetail } from '../api/pokemon'
import Header from '../components/Pokemon/Header'
import Type from '../components/Pokemon/Type'
import Stats from '../components/Pokemon/Stats'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Favorite from '../components/Pokemon/Favorite'
import useAuth from '../hooks/useAuth'

export default function Pokemon(props) {

  const {route: {params}, navigation} = props

  const { auth } = useAuth()

  const [pokemon, setPokemon] = useState(null)

  

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetail(params.id)
        setPokemon(response)
      } catch (error) {
        navigation.goBack()
      }
    })()
  }, [params, navigation, auth])

  useEffect(() => {
    if(pokemon){
      navigation.setOptions({
        headerRight: () => {
          if (auth && pokemon?.id) {
            return <Favorite id={pokemon?.id} />;
          } else {
            return null;
          }
        },
        headerLeft: ()=> (
        <Icon 
        name="arrow-left" 
        color="#fff" 
        size={20} 
        style={{marginLeft: 5}} 
        onPress={()=> navigation.goBack()}
        />
        )
      })
    }
    
  }, [navigation, params, auth, pokemon])

  if(!pokemon) return null

  return (
    <ScrollView>
      <Header 
      name={pokemon.name} 
      order={pokemon.order} 
      image={pokemon.sprites.other['official-artwork'].front_default}
      type={pokemon.types[0].type.name}
      />
      <Type types={pokemon?.types}/>
      <Stats stats={pokemon?.stats}/>
    </ScrollView>
  )
}