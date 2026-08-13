import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProviderEstudiante from './Providers/ProviderEstudiante';

export default function App() {
  return (
    <View style={styles.container}>
      <ProviderEstudiante></ProviderEstudiante>

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
