import { View, Text } from 'react-native'
import React from 'react'
import { Persona } from '../Models/Persona'

export default function UserProfile(props:Persona) {
  return (
    <View>
      <Text>Componente Padre: {props.nombre} {props.edad} {props.ciudad} {props.ocupacion}</Text>
    </View>
  )
}
