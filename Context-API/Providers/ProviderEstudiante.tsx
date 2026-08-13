import { View, Text } from 'react-native'
import React, { useContext, useState } from 'react'
import {ViewReact} from '../Models/ViewReact'
import {ContextEstudiantes} from '../Context/ContextEstudiantes';
import {Estudiante} from '../Models/Estudiante'


//componentrs ReactNode 
// van tner funcionalidad que se definicio contexto y lo exporta 
// vamos que exportar el contexto 


export default function ProviderContador(props: ViewReact) {

  const [estudiantes, setEstudiantes] = useState<Estudiante[]>([
    {
      id:1,
      name: 'Alejandro'
    },
    {
      id:2,
      name: 'Maria'
    },
    {
      id:3,
      name: 'Juan'
    }
  ]);

  const mostrarLista = (estudiantes: Estudiante[]) => {
    setEstudiantes(estudiantes);
  }

  const agregarEstudiante = (estudiante: Estudiante) => {
    setEstudiantes([...estudiantes, estudiante]);
  }

  const eliminarEstudiante = (id: number) => {
    setEstudiantes(estudiantes.filter(estudiante => estudiante.id !== id));
  } 
  const actualizarEstudiante = (estudiante: Estudiante) => {
    setEstudiantes(estudiantes.map(e => e.id === estudiante.id ? estudiante : e));
  } 




return (
  <view>
    <ContextEstudiantes.Provider value={{estudiantes, mostrarLista, agregarEstudiante, eliminarEstudiante, actualizarEstudiante}}>
      {props.children}
    </ContextEstudiantes.Provider>
  </view>
)

}

export const useEstudiantes = () => {
  return useContext(ContextEstudiantes);
}
