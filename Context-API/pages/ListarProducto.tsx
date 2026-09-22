import { View, Text, FlatList, Button, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useContextProducto } from '../Providers/ProviderProducto';

export default function ListarProducto() {

  const {
    listaProductos,
    obtenerProductos,
    eliminarProducto
  } = useContextProducto();

  useEffect(() => {

    obtenerProductos();

  }, []);


  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>
        Lista de Productos
      </Text>

      <FlatList

        data={listaProductos}

        keyExtractor={(item) => item.id!.toString()}

        renderItem={({ item }) =>

          <View style={styles.item}>

            <Text>Nombre: {item.nombre}</Text>

            <Text>Precio: L. {item.precio}</Text>

            <Text>Descripción: {item.descripcion}</Text>

            <Button
              title="Ver"
              onPress={() => {
                console.log(item);
              }}
            />

            <Button
              title="Eliminar"
              onPress={() => eliminarProducto(item.id!)}
            />

          </View>

        }

      />

    </View>
  )
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20
  },

  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20
  },

  item: {
    padding: 15,
    borderWidth: 1,
    marginBottom: 10
  }

})