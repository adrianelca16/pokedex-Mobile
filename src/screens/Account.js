import { View, Text } from 'react-native'
import React from 'react'
import LoginForm from '../components/Auth/LoginForm'
import UserDateForm from '../components/Auth/UserDateForm'
import useAuth from '../hooks/useAuth'


export default function Account() {
  const  { auth } = useAuth()
  return (
    <View>
      {auth ? <UserDateForm/> : <LoginForm/>}
    </View>
  )
}