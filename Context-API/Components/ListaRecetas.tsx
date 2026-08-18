import { View, Text, TextInput, Button, Alert,StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useRecetas } from '../Providers/ProviderRecetas'
import { Receta } from '../Models/Receta'

export default function Formulario() {

    const [nombre, setNombre] = useState<string>('');
    const [ingrediente1, setIngrediente1] = useState<string>('');
    const [ingrediente2, setIngrediente2] = useState<string>('');
    const [ingrediente3, setIngrediente3] = useState<string>('');
    const [ingrediente4, setIngrediente4] = useState<string>('');
    const [ingrediente5, setIngrediente5] = useState<string>('');
    const [fechaCreacion, setFechaCreacion] = useState<string>('');

    const { agregarReceta } = useRecetas();

    function agregarRecetaHandler() {

        let receta: Receta = {
            id: Date.now(),
            nombre: nombre,
            ingredientes: [ingrediente1,ingrediente2,ingrediente3,ingrediente4,ingrediente5],
            fechaCreacion: fechaCreacion
        }

        agregarReceta(receta);

        Alert.alert('Receta agregada correctamente');

        setNombre('');
        setIngrediente1('');
        setIngrediente2('');
        setIngrediente3('');
        setIngrediente4('');
        setIngrediente5('');
        setFechaCreacion('');
    }

    return (
        <View>

            <Text>Agregar Receta</Text>
            <TextInput
                style={styles.input}
                placeholder='Ingrese nombre de la receta'
                placeholderTextColor="#777"
                value={nombre}
                onChangeText={setNombre}
            />

            <TextInput
                style={styles.input}
                placeholder='Ingrese ingrediente 1'
                placeholderTextColor="#777"
                value={ingrediente1}
                onChangeText={setIngrediente1}
            />

            <TextInput
                style={styles.input}
                placeholder='Ingrese ingrediente 2'
                placeholderTextColor="#777"
                value={ingrediente2}
                onChangeText={setIngrediente2}
            />

            <TextInput
                style={styles.input}
                placeholder='Ingrese ingrediente 3'
                placeholderTextColor="#777"
                value={ingrediente3}
                onChangeText={setIngrediente3}
            />

            <TextInput
                style={styles.input}
                placeholder='Ingrese ingrediente 4'
                placeholderTextColor="#777"
                value={ingrediente4}
                onChangeText={setIngrediente4}
            />

            <TextInput
                style={styles.input}
                placeholder='Ingrese ingrediente 5'
                placeholderTextColor="#777"
                value={ingrediente5}
                onChangeText={setIngrediente5}
            />

            <TextInput
                style={styles.input}
                placeholder='Ingrese fecha de creación'
                value={fechaCreacion}
                onChangeText={setFechaCreacion}
            />

            <Button
                title='Agregar Receta'
                onPress={agregarRecetaHandler}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        width: 300,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
    }
});