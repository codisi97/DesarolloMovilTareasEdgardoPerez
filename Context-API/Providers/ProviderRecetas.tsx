import { View, Text } from 'react-native'
import React, { useContext, useState } from 'react'
import { ViewReact } from '../Models/ViewReact'
import { Receta } from '../Models/Receta'
import { ContextRecetas } from '../Context/ContextRecetas'

//componentrs ReactNode
// van tner funcionalidad que se definicio contexto y lo exporta
// vamos que exportar el contexto 

export default function ProviderRecetas({ children }: ViewReact) {

    const [recetas, setRecetas] = useState<Receta[]>([]);

    const agregarReceta = (receta: Receta) => {
        setRecetas([...recetas, receta]);
    }

    const eliminarReceta = (id: number) => {
        setRecetas(recetas.filter(receta => receta.id !== id));
    }

    const buscarReceta = (id: number): Receta | undefined => {
        return recetas.find(receta => receta.id === id);
    }


    return (
        <View>
            <ContextRecetas.Provider value={{ recetas, agregarReceta, eliminarReceta, buscarReceta }}>
                {children}
            </ContextRecetas.Provider>
        </View>
    )
}

export const useRecetas = () => {
    return useContext(ContextRecetas);
}