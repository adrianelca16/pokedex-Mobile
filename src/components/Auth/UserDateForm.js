import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import useAuth from '../../hooks/useAuth'

export default function UserDateForm() {
  const { auth, logout } = useAuth()
  return (
    <View style={style.content}>
      <View style={style.titleBlock}>
        <Text style={style.title}>Bienvenido,</Text>
        <Text style={style.title}>{`${auth.firstName} ${auth.lastName}`}</Text>
      </View>
      <View style={style.dataContent}>
        <ItemMenu title='Nombre' text={`${auth.firstName} ${auth.lastName}`} />
        <ItemMenu title='Usuario' text={`${auth.username}`} />
        <ItemMenu title='Correo' text={`${auth.email}`} />
        <ItemMenu title='Total de Favoritos' text={`0 pokemones`} />
      </View>
      <View style={style.btnLogout}>
        <Button title='Desconectarse' onPress={logout}/>
      </View>
    </View>
  )
}

function ItemMenu (props) {
  const { title, text} = props

  return (
    <View style={style.itemMenu}>
      <Text style={style.itemMenuTitle}>{title}: </Text>
      <Text>{text}</Text>
    </View>
  )

}

const style = StyleSheet.create({
  content: {
    marginHorizontal: 20, 
    marginTop: 20,
  },
  titleBlock: {
    marginBottom: 30,
  },
  title:{
    fontWeight: 'bold',
    fontSize: 22
  },
  dataContent: {
    marginBottom: 20
  },
  itemMenu: {
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#cfcfcf'
  },
  itemMenuTitle:{
    fontWeight: 'bold',
    paddingRight: 10,
    width: 120
  },
  btnLogout: {
    marginTop: 40,
  }
})