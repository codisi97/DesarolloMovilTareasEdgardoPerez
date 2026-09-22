import { Alert } from 'react-native'
import React, { useContext, useState } from 'react'
import { ContextProducto } from '../Context/ContextProducto'
import { Producto } from '../Models/Producto';

interface ViewProps {
  children: React.ReactNode;
}

export default function ProviderProducto(children: ViewProps) {

  const [listaProductos, setListaProductos] = useState<Producto[]>([]);

  const agregarProducto = async (producto: Producto) => {

    try {

      const response = await fetch('https://rb9fst78-3000.use.devtunnels.ms/productos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(producto)
      });

      const data = await response.json();

      console.log(data);

      Alert.alert('Producto agregado correctamente');

    } catch (error) {

      Alert.alert(
        'Error al agregar el producto',
        (error as Error).message
      );

    }
  }

  return (
    <ContextProducto.Provider
      value={{
        listaProductos,
        setListaProductos,
        agregarProducto
      }}
    >
      {children.children}
    </ContextProducto.Provider>
  )
}

export const useContextProducto = () => {
  return useContext(ContextProducto);
}