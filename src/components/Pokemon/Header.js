import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native'
import React from 'react'
import {capitalize} from 'lodash'
import getColorByPokemonType from '../../utils/getColorByPokemonType'

export default function Header(props) {

    const {image, name, order, type} = props

    const color = getColorByPokemonType(type)

    const bgStyle = [{backgroundColor: color, ...style.bg}]
  return (
    <>
        <View style={bgStyle}/>
        <SafeAreaView style={style.content}>
            <View style={style.header}>
                <Text style={style.name}>{capitalize(name)}</Text>
                <Text style={style.order}>#{`${order}`.padStart(3,0)}</Text>
            </View>
            <View style={style.contentImg}>
                <Image source={{uri:image}} style={style.image}/>
            </View>
        </SafeAreaView>
    </>
  )
}

const style = StyleSheet.create({
    bg: {
        width: '100%',
        height: 400,
        position: 'absolute',
        borderBottomEndRadius: 300,
        borderBottomLeftRadius: 300,
        transform: [{scaleX: 2}]
    },
    content: {
        marginHorizontal:20,
        marginTop: 30,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 40
    },
    name: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 27,
    },
    order: {
        color: '#fff',
        fontWeight: 'bold'
    },
    contentImg: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        top: '30'
    },
    image: {
        width: 250,
        height: 300,
        resizeMode: 'contain'
    }
})