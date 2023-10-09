import { View, Text, StyleSheet, TextInput, Keyboard, Button } from 'react-native'
import React, { useState } from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {user, userDetails} from '../../utils/useDB'
import useAuth from '../../hooks/useAuth'

export default function LoginForm() {

    const [error, setError] = useState("")

    const { login } = useAuth()

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
        onSubmit: (formValue) => {
            const {password, username} = formValue

            if(username !== user.user || password !== user.password){
                setError('EL usuario o la contrasena no son correctos')
            }
            else{
                setError('')
                login(userDetails)
            }
        }
    })

  return (
    <View>
      <Text style={style.title}>Iniciar sesion</Text>
      <Text style={style.errors}>{formik.errors.username}</Text>
      <TextInput 
      placeholder='Nombre de usuario' 
      style={style.input} 
      autoCapitalize='none'
      value={formik.values.username}
      onChangeText={(text)=> formik.setFieldValue('username', text)}
      />
      <Text style={style.errors}>{formik.errors.password}</Text>
      <TextInput 
      placeholder='Contraseña' 
      style={style.input} 
      autoCapitalize='none' 
      secureTextEntry={true}
      value={formik.values.password}
      onChangeText={(text)=> formik.setFieldValue('password', text)}
      />
      <View style={style.button}>
        <Button title='Entrar' onPress={formik.handleSubmit} />
      </View>

      <Text style={style.errors}>{error}</Text>
      
    </View>
  )
}

function initialValues(){
    return {
        username: "",
        password: ""
    }
}
function validationSchema () {
    return {
        username: Yup.string().required("El usuario es obligatorio"),
        password: Yup.string().required("La contraseña es obligatoria")
    }
}

const style = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 48,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 15
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding:10,
        borderRadius: 10,
    },
    errors: {
        color: '#ff3e3e',
        textAlign: 'center',
        marginTop: 20,
    },
    button: {
        marginTop: 30
    }
})