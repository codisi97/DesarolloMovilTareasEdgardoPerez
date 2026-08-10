
import {useState} from 'react';
import {View,Text, TextInput,Button,StyleSheet} from 'react-native';
import CalculadoraIMC from './CalculadoraIMC';

export default function Formulario() {
  const [peso,setPeso]= useState<number>(0);
  const [altura,setAltura]=useState<number>(0);
  return (
    <View>
      <Text>Calculadora de IMC</Text>
      <Text>Ingrese su peso (kg)</Text>
      <TextInput
        placeholder="Peso"
        keyboardType="numeric"
        value={peso.toString()}
        onChangeText={(text)=>setPeso(Number(text))}
      />

      <Text>Ingrese su Altura (cm)</Text>
      <TextInput
        placeholder="Altura"
        keyboardType="numeric"
        value={altura.toString()}
        onChangeText={(text)=>setAltura(Number(text))}
      />
      <CalculadoraIMC peso={peso} altura={altura}></CalculadoraIMC>

    </View>
  );
}


