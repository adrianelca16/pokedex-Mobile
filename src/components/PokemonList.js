import { StyleSheet, FlatList, ActivityIndicator, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import PokemonCard from './PokemonCard'

export default function PokemonList(props) {
  const { pokemon, loadPokemon, isNext } = props
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1) // Página actual

  useEffect(() => {
    if (!loading) {
      setLoading(true)
      loadPokemon(page) // Carga datos de la página actual
        .then(() => {
          setPage(page + 1) // Incrementa la página
          setLoading(false)
        })
    }
  }, [page])

  const loadMore = () => {
    if (!loading) {
      setPage(page + 1) // Incrementa la página para cargar más datos
    }
  }

  return (
    <FlatList
      data={pokemon}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListConatiner}
      onEndReached={isNext && loadMore}
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
    paddingHorizontal: 5,
    marginTop: Platform.OS === "android" ? 30 : 0
  },
  spinner: {
    marginTop: 20,
    marginBottom: Platform.OS === "android" ? 90 : 60
  }
})
