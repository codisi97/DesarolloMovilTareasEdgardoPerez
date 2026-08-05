import { View, Text, TextInput,Button } from "react-native";
import { useState } from "react";

export default function CalculateExercises() {
  const [horaEjercisio, setHoraEjercisio] = useState<number>(0);
  const [horaObjetivo, setHoraObjetivo] = useState<number>(0);

  const [dias, setDias] = useState<number>(0);
  const [diasEntrenados, setDiasEntrenados] = useState<number>(0);
  const [tiempo, setTiempo] = useState<number>(0);

  function tiempoPromedio(promedio:number) {

    set

    
    
  }

  return (
    <View>
      <Text>Calculadora de Ejercicios</Text>
      <Text>Ingrese la cantidad de horas de objetivo</Text>
      <TextInput
        placeholder="Ingrese la cantidad de horas"
        keyboardType="numeric"
        value={horaObjetivo.toString()}
        onChangeText={(texto) => setHoraObjetivo(Number(texto))}
      />
      <Text>Ingrese la cantidad de horas de ejercisio realizadas</Text>
      <TextInput
        placeholder="Ingrese la cantidad de horas"
        keyboardType="numeric"
        value={horaEjercisio.toString()}
        onChangeText={(texto) => setHoraEjercisio(Number(texto))}
      />
      <Button title='Calcular' onPress={tiempoPromedio}></Button>


    </View>
  );
}