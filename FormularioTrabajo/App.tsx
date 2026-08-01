import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import UserProfile from './Components/UserProfile';
import UserHeader from './Components/UserHeader';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola mundo!</Text>
      <StatusBar style="auto" />


      <UserProfile nombre="Juan" edad={30} ciudad="Madrid" ocupacion="Ingeniero"></UserProfile>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
