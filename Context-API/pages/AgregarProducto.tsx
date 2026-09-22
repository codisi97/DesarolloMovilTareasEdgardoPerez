import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { useContextProducto } from '../Providers/ProviderProducto';
import { Producto } from '../Models/Producto';

export default function AgregarProducto() {

  const { agregarProducto } = useContextProducto();

  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [estado, setEstado] = useState('');
  const [categoria, setCategoria] = useState('');
  const [url_fotografia, setUrlFotografia] = useState('');


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
    <View>

      <Text>Formulario de Agregar Productos</Text>

      <TextInput
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />

      <TextInput
        placeholder="Descripcion"
        value={descripcion}
        onChangeText={setDescripcion}
      />

      <TextInput
        placeholder="Precio"
        value={precio}
        onChangeText={setPrecio}
        keyboardType="numeric"
      />

      <TextInput
        placeholder="Estado"
        value={estado}
        onChangeText={setEstado}
      />

      <TextInput
        placeholder="Categoria"
        value={categoria}
        onChangeText={setCategoria}
      />

      <TextInput
        placeholder="URL Fotografia"
        value={url_fotografia}
        onChangeText={setUrlFotografia}
      />

      <Button
        title="Agregar Producto"
        onPress={handleAgregarProducto}
      />

    </View>
  )
}