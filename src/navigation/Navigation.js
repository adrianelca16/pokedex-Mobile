
// Import necessary components
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Image} from 'react-native'

// Import screen components
import Account from '../screens/Account';
import PokedexNavegation from './PokedexNavegation';
import FavoriteNavigation from './FavoriteNavigation';

// Create bottom tab navigator
const Tab = createBottomTabNavigator();

// Navigation function
export default function Navigation() {

    // Return tab navigator with screens
    return (
        <Tab.Navigator initialRouteName='PokedexNavegation'>
            <Tab.Screen name='Favorite' component={FavoriteNavigation} options={
                {
                    tabBarLabel: "Favoritos",
                    tabBarIcon: ({color,size}) => (
                        <Icon name='heart' color={color} size={size}/>
                    ),
                    title: '',
                    headerShown: false
                }
            }/>
            <Tab.Screen name='PokedexNavegation' component={PokedexNavegation} options={{
              tabBarLabel: '',
              tabBarIcon: () => renderPokeBall(),
              title: '',
              headerShown: false
            }}
              />
            <Tab.Screen name='Account' component={Account} options={
                {
                    tabBarLabel: "Mi cuenta",
                    tabBarIcon: ({color, size}) => (
                        <Icon name='user' color={color} size={size}/>
                    ),
                    title: 'Mi cuenta'
                }
              }/>
        </Tab.Navigator>
    )
}

const renderPokeBall = () => {
  return (
    <Image
      source={require('../assets/pokeball.png')}
      style={{ width: 130, height: 130, top: -18}}
    />
  )
}