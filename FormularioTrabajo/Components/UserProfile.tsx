import { View, Text } from 'react-native'
import React from 'react'
import { Persona } from '../Models/Persona'
import UserHeader from './UserHeader';
import UserDetails from './UserDetails';

export default function UserProfile(props:Persona) {
  return (
    <View>
      <Text>Componente Padre: {props.nombre} {props.edad} {props.ciudad} {props.ocupacion}</Text>
      <UserHeader nombre='Alejandro' edad = {28}></UserHeader>
      <UserDetails ciudad='Tegucigalpa' ocupacion='Arquitecto' edad={5} ></UserDetails>

    </View>
  )
}
