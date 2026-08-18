import { View, Text, FlatList, Button, Alert, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useRecetas } from '../Providers/ProviderRecetas'
import { Receta } from '../Models/Receta'

export default function Lista() {

    const { recetas, eliminarReceta, buscarReceta } = useRecetas();

    const [idBuscar, setIdBuscar] = useState<string>('');
    const [recetaEncontrada, setRecetaEncontrada] = useState<Receta | undefined>();

    function eliminarRecetaHandler(id: number) {
        eliminarReceta(id);
        Alert.alert('Receta eliminada correctamente');
    }

    function buscarRecetaHandler() {

        const receta = buscarReceta(Number(idBuscar));
        setRecetaEncontrada(receta);
    }


    return (
        <View>
            <Text>Buscar Receta</Text>

            <TextInput
                placeholder='Ingrese ID de la receta'
                value={idBuscar}
                onChangeText={setIdBuscar}
                keyboardType='numeric'
            />
            <Button
                title='Buscar'
                onPress={buscarRecetaHandler}
            />
            {recetaEncontrada && (
                <View>
                    <Text>Receta Encontrada</Text>
                    <Text>ID: {recetaEncontrada.id}</Text>
                    <Text>Nombre: {recetaEncontrada.nombre}</Text>
                    <Text>
                        Ingredientes: {recetaEncontrada.ingredientes.join(', ')}
                    </Text>
                    <Text>Fecha: {recetaEncontrada.fechaCreacion}</Text>
                </View>
            )}
            <Text>Listado de Recetas</Text>

            <FlatList
                data={recetas}

                renderItem={({ item }) =>
                    <View>
                        <Text>ID: {item.id}</Text>
                        <Text>Nombre: {item.nombre}</Text>
                        <Text>
                            Ingredientes: {item.ingredientes.join(', ')}
                        </Text>
                        <Text>Fecha: {item.fechaCreacion}</Text>

                        <Button
                            title='Eliminar'
                            onPress={() => eliminarRecetaHandler(item.id)}
                        />
                    </View>
                }

                keyExtractor={item => item.id.toString()}

                ItemSeparatorComponent={() =>
                    <View style={{ height: 10 }} />
                }

                ListEmptyComponent={() =>
                    <Text>No hay recetas</Text>
                }
            />

        </View>
    )
}