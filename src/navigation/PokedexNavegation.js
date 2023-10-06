import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import Pokedex from '../screens/Pokedex'
import Pokemon from '../screens/Pokemon'

export default function PokedexNavegation() {

    const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator>
        <Stack.Screen name='Pokedex' component={Pokedex} options={{headerShown: false}}/>
        <Stack.Screen name='Pokemon' component={Pokemon} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}