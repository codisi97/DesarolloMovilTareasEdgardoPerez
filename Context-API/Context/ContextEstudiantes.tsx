import {createContext} from 'react';
import {Estudiante} from '../Models/Estudiante'

export const ContextEstudiantes = createContext({
  estudiantes: [] as Estudiante[],
  mostrarLista: (estudiantes:Estudiante[]) =>{},
  agregarEstudiante: (estudiante:Estudiante) =>{},
  eliminarEstudiante: (id: number) =>{},
  actualizarEstudiante: (estudiante: Estudiante) =>{}
  
})

