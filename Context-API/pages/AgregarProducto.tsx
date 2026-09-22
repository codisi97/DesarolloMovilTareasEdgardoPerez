import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useContextProducto } from '../Providers/ProviderProducto';
import { Producto } from '../Models/Producto';
import * as ImagePicker from 'expo-image-picker';

export default function AgregarProducto() {

  const { agregarProducto } = useContextProducto();

  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [estado, setEstado] = useState('');
  const [categoria, setCategoria] = useState('');
  const [url_fotografia, setUrlFotografia] = useState('');



  const tomarFoto = async () => {

    const permiso = await ImagePicker.requestCameraPermissionsAsync();

    if (!permiso.granted) {
      alert('Se necesita permiso para usar la cámara');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ['images'],
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result.assets[0].uri);

      setUrlFotografia(result.assets[0].uri);
    }
  }


  function handleAgregarProducto() {

    const nuevoProducto: Producto = {

      nombre: nombre,
      descripcion: descripcion,
      precio: Number(precio),
      estado: estado,
      categoria: categoria,
      url_fotografia: url_fotografia

    }

    agregarProducto(nuevoProducto);

    setNombre('');
    setDescripcion('');
    setPrecio('');
    setEstado('');
    setCategoria('');
    setUrlFotografia('');
  }


  return (
    <View style={styles.container}>

        <Text style={styles.titulo}>
            Agregar Producto
        </Text>

        <TextInput
            style={styles.input}
            placeholder="Nombre"
            value={nombre}
            onChangeText={setNombre}
        />

        <TextInput
            style={styles.input}
            placeholder="Descripcion"
            value={descripcion}
            onChangeText={setDescripcion}
        />

        <TextInput
            style={styles.input}
            placeholder="Precio"
            value={precio}
            onChangeText={setPrecio}
            keyboardType="numeric"
        />

        <TextInput
            style={styles.input}
            placeholder="Estado"
            value={estado}
            onChangeText={setEstado}
        />

        <TextInput
            style={styles.input}
            placeholder="Categoria"
            value={categoria}
            onChangeText={setCategoria}
        />

        <View style={styles.boton}>
            <Button
                title="Tomar Fotografia"
                onPress={tomarFoto}
            />
        </View>

        {url_fotografia !== '' && (
            <Image
                source={{ uri: url_fotografia }}
                style={styles.imagen}
            />
        )}

        <View style={styles.boton}>
            <Button
                title="Agregar Producto"
                onPress={handleAgregarProducto}
            />
        </View>

    </View>
)}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 25,
        backgroundColor: '#fff'
    },

    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 25
    },

    input: {
        width: '100%',
        maxWidth: 400,
        height: 45,
        borderWidth: 1,
        borderColor: '#777',
        borderRadius: 5,
        paddingHorizontal: 12,
        marginBottom: 15
    },

    boton: {
        width: '100%',
        maxWidth: 400,
        marginBottom: 15
    },

    imagen: {
        width: 150,
        height: 150,
        marginBottom: 15
    }

})