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

      console.log('Producto enviado:', producto);

      const response = await fetch(
        'https://rb9fst78-3000.use.devtunnels.ms/productos',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(producto)
        }
      );

      console.log('Status:', response.status);

      const data = await response.json();

      console.log('Respuesta API:', data);

      if (response.ok) {
        Alert.alert('Producto agregado correctamente');
      } else {
        Alert.alert('Error del servidor', data.message);
      }

    } catch (error) {

      console.log('ERROR FETCH:', error);

      Alert.alert(
        'Error al agregar el producto',
        (error as Error).message
      );
    }
  }

  const obtenerProductos = async () => {

    try {

      const response = await fetch(
        'https://rb9fst78-3000.use.devtunnels.ms/productos'
      );

      const data = await response.json();

      console.log(data);

      setListaProductos(data);

    } catch (error) {

      Alert.alert(
        'Error al obtener los productos',
        (error as Error).message
      );

    }
  }

  const eliminarProducto = async (id: number) => {

    try {

      const response = await fetch(
        `https://rb9fst78-3000.use.devtunnels.ms/productos/${id}`,
        {
          method: 'DELETE'
        }
      );

      const data = await response.json();

      console.log(data);

      if (response.ok) {

        Alert.alert('Producto eliminado correctamente');

        setListaProductos(
          listaProductos.filter(producto => producto.id !== id)
        );

      }

    } catch (error) {

      Alert.alert(
        'Error al eliminar el producto',
        (error as Error).message
      );

    }
  }
  return (
    <ContextProducto.Provider
      value={{
        listaProductos,
        setListaProductos,
        agregarProducto,
        obtenerProductos,
        eliminarProducto
      }}
    >
      {children.children}
    </ContextProducto.Provider>
  )
}

export const useContextProducto = () => {
  return useContext(ContextProducto);
}