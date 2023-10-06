import { StyleSheet,FlatList, ActivityIndicator} from 'react-native'
import React, { useEffect, useState } from 'react'
import PokemonCard from './PokemonCard'

export default function PokemonList(props) {
    const {pokemon, loadPokemon, isNext} = props

    const [count, setCount] = useState(0)

    useEffect(() => {
        loadPokemon()
    }, [count])
    

    const loadMore = () =>{
        console.log('hola')
        setCount(count + 1 )
    }

  return (
    <FlatList
    data={pokemon}
    numColumns={2}
    showsVerticalScrollIndicator= {false}
    keyExtractor={(pokemon) => String(pokemon.id)}
    renderItem={({item}) => <PokemonCard pokemon={item}/>}
    contentContainerStyle={styles.flatListConatiner}
    onEndReached={loadMore}
    onEndReachedThreshold={0.1}
    ListFooterComponent={
        isNext && (
        <ActivityIndicator
        size='large'
        style={styles.spinner}
        color='#AEAEAE'
        />
        )
    }
    />
  )
}

const styles = StyleSheet.create({
    flatListConatiner: {
        paddingHorizontal: 5
    },
    spinner:{
        marginTop:20,
        marginBottom: 60,
    }
})