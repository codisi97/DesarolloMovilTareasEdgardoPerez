import {useState,useEffect} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import Formulario from '../Components/Formulario';
import {Props} from '../Models/Props';


export default function CalculadoraIMC({peso,altura}:Props) {
  const [imc,setImc]=useState<number>(0);
  const [clasificacion,setClasificacion]=useState<string>("");

  function calcularIMC(){
    //IMC = peso / (altura * altura)
    const alturaMetros = altura /100;
    setImc(peso/(alturaMetros*alturaMetros));
  }

  function ClasificacionIMC(){
    if(imc<18.5){
      setClasificacion("Bajo peso");
    }
    if(18.5<=imc && imc<24.9){
      setClasificacion("Peso normal");
    }
    if(25<= imc && imc<29.9){
      setClasificacion("Sobrepeso");
    } else if(imc>=30){
      setClasificacion("Obesidad");
    }

  }

  useEffect(()=>{
    calcularIMC();ClasificacionIMC();
  },[peso,altura]);


  return (
    <View>
    <View style = {styles.resultado}>
      <text>Tu IMC es:{imc}</text>
    </View>

    <View style = {styles.resultado}>
      <text>Tu clasificacion es:{clasificacion}</text>
    </View>


    </View>



  )
}
const styles = StyleSheet.create({
  resultado: {
    backgroundColor: '#ebb15a',
    borderRadius: 15,
    padding: 20,
    margin: 10,
  },
});