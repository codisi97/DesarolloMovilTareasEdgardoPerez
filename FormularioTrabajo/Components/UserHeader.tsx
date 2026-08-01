import { View, Text } from 'react-native'
import React from 'react'
import { Persona } from '../Models/Persona'

export default function UserHeader(props:Persona) {
  return (
    <View>
      <Text>Nombre y edad = {props.nombre} {props.edad} </Text>
    </View>
  )
}
