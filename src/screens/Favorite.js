import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import {getPokemonsFavoriteApi} from '../api/favorite'

export default function Favorite() {

  const [favorites, setFavorites] = useState(null)

  const checkFavorites = async () =>{
    const response = await getPokemonsFavoriteApi()
      console.log(response)
  }
  
  return (
    <View>
      <Text>Favorite</Text>
      <Button onPress={checkFavorites} title='Obtener favoritos'/>
    </View>
  )
}