import { View, Text } from 'react-native'
import React from 'react'
import LoginForm from '../components/Auth/LoginForm'
import UserDateForm from '../components/Auth/UserDateForm'


export default function Account() {
  const auth = null
  return (
    <View>
      {auth ? <UserDateForm/> : <LoginForm/>}
    </View>
  )
}