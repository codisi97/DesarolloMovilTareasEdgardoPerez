import { View, Text, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import { useProducto } from '../Providers/ProviderProducto';
import { Producto } from '../modelos/Producto';
import { useContador } from '../Providers/ProviderContador';

export default function ConsumidorProducto() {

    }

    return (
        <View>
            <Text>Listado de estudiantes</Text>

            <TextInput placeholder='Ingrese Nombre del Producto'
                value={nombre}
                onChangeText={setNombre}
            ></TextInput>
            <TextInput placeholder='Ingrese Precio del Producto'

                value={precio}
                onChangeText={setPrecio}
            ></TextInput>

            <TextInput placeholder='Ingrese URL del Producto'

                value={url}
                onChangeText={setUrl}
            ></TextInput>

            <Button title='Agregar Producto' onPress={agregarProductoHandler} />
        </View>
    )
}