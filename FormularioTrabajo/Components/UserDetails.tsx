import { View, Text } from 'react-native'
import React from 'react'
import { Persona } from '../Models/Persona'


export default function UserDetails(props:Persona) {
  return (
    <View>
      <Text>Ciudad y Ocupacion = {props.ciudad} {props.ocupacion} </Text>
    </View>
  )
}
