import { View, Text } from 'react-native'
import React, { useContext, useState } from 'react'
import {MascotaContext} from '../Context/MacotaContext'
import {ViewReact} from '../Models/ViewReact'
import {Indicador} from '../Models/Indicador'
import {EntradaBitacora} from '../Models/EntradaBitacora'




//componentrs ReactNode
// van tner funcionalidad que se definicio contexto y lo exporta
// vamos que exportar el contexto 

export default function ProviderMascota({ children }: ViewReact) {

  const [nombre, setNombre]=useState<string>('Bobby');
  const [indicadores, setIndicadores]=useState<Indicador[]>([
    {
      nombre:"Alimento",
      valor: 60
    },
    {
      nombre:"Energia",
      valor: 60
    },
    {
      nombre:"Animo",
      valor: 60
    }
    
  ])

  const [modoNoche, setModoNoche]=useState<boolean>(false); 
  const [bitacora, setBitacora] = useState<EntradaBitacora[]>([]);
  const [estadoAnimo, setEstadoAnimo] = useState<string>("")

   return (
    <MascotaContext.Provider
      value={{
        nombre,
        necesitaAyuda: false,
        puedeJugar: true,
        indicadores,
        mascotas: [],
        estadoAnimo,
        alternarModoNoche: () => {},
        alimentar: () => {},
        jugar: () => {},
        descansar: () => {},
        reiniciar: () => {}
      }}
    >
      {children}
    </MascotaContext.Provider>
  );
}

