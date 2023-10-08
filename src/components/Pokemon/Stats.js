import { StyleSheet,View, Text } from 'react-native'
import React from 'react'
import {map, capitalize} from 'lodash'

export default function Stats(props) {
    const {stats} = props

    const barStyle = (num) =>{
        const color = num > 49 ? '#00ac17' : '#ff3e3e'
        return {
            backgroundColor: color,
            width: `${num}%`
        }
    }
  return (
    <View style={style.content}>
      <Text style={style.title}>Base Stats</Text>
      {map(stats, (item, index) => (
        <View key={index} style={style.block}>
            <View style={style.blockTitle}>
                <Text style={style.statsName}>{capitalize(item.stat.name)}</Text>
            </View>
            <View style={style.blockInfo}>
                <Text style={style.number}>{item.base_stat}</Text>
                <View style={style.bgBar}>
                    <View style={[style.bar, barStyle(item.base_stat)]}></View>
                </View>
            </View>
        </View>
      ))}
    </View>
  )
}

const style = StyleSheet.create({
    content:{
        paddingHorizontal: 20,
        marginTop: 40,
        marginBottom:80,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 5,
    },
    block:{
        flexDirection: 'row',
        paddingVertical: 5,
    },
    blockTitle: {
        width: '30%',

    },
    statsName: {
        fontSize: 12,
        color: '#6B6B6B'
    },
    blockInfo: {
        width: '70%',
        flexDirection: 'row',
        alignItems: 'center',

    },
    number:{
        width: '12%',
        fontSize: 12
    },
    bgBar: {
        backgroundColor: '#dedede',
        width: '88%',
        height: 10,
        borderRadius: 20,
        overflow: 'hidden'
    },
    bar: {
        height: 10,
        borderRadius: 20,
    }
})