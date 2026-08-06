import { View, Text, TextInput,Button } from "react-native";
import { useState } from "react";

export default function CalculateExercises() {
  const [horaEjercisio, setHoraEjercisio] = useState<number>(0);
  const [horaObjetivo, setHoraObjetivo] = useState<number>(0);

  const [dias, setDias] = useState<number>(0);
  const [diasEntrenados, setDiasEntrenados] = useState<number>(0);
  const [tiempo, setTiempo] = useState<number>(0);
  const [promedio, setPromedio]=useState<number>(0);
  const [objetivoAlcanzado, setObjetivoAlcanzado] = useState<boolean>(false);

  function tiempoPromedio() {
    setPromedio(horaEjercisio / 7);
  }

  function calcularObjetivoAlcanzado(){
    if (horaEjercisio >= horaObjetivo){
      setObjetivoAlcanzado(true); 
    } else {
      setObjetivoAlcanzado(false);
    }
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
      <Text>Ingrese la cantidad de horas de ejercisios realizadas en la semana </Text>
      <TextInput
        placeholder="Ingrese la cantidad de horas"
        keyboardType="numeric"
        value={horaEjercisio.toString()}
        onChangeText={(texto) => setHoraEjercisio(Number(texto))}
      />
      <Button title='Calcular' onPress={()=>{tiempoPromedio(); calcularObjetivoAlcanzado();}}></Button>

      <text>El promedio de horas de ejercisio es: {promedio.toFixed(2)}</text>
      <text>El objetivo {objetivoAlcanzado ? "fue alcanzado":"no fue Alcanzado"}</text>

      




    </View>
  );
}