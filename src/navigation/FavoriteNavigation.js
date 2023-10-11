import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import FavoriteScreen from '../screens/FavoriteScreen'
import Pokemon from '../screens/Pokemon'


export default function FavoriteNavigation() {

    const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator>
        <Stack.Screen name='Favoritos' component={FavoriteScreen} options={{title: 'Favoritos'}} />
        <Stack.Screen name='Pokemon' component={Pokemon} options={{title: '', headerTransparent: true}}/>
    </Stack.Navigator>
  )
}