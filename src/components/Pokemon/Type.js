import { StyleSheet,View, Text } from 'react-native'
import React from 'react'
import {capitalize, map} from 'lodash'
import getColorByPokemonType from '../../utils/getColorByPokemonType'

export default function Type(props) {
    const {types} = props


  return (
    <View style={style.content}>
      {map(types, (item, index) => (
        <View key={index} style={{...style.pill, backgroundColor: getColorByPokemonType(item.type.name)}}>
            <Text style={style.name}>{capitalize(item.type.name)}</Text>
        </View>
      ))}
    </View>
  )
}

const style = StyleSheet.create({
    content:{
        marginTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pill:{
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 20,
        marginHorizontal: 10,
    },
    name: {
        color: '#fff'
    }
})