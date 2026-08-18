import { ScrollView, StyleSheet, Text } from 'react-native'
import ProviderRecetas from './Providers/ProviderRecetas'
import Formulario from './Components/ListaRecetas'
import Lista from './Components/Lista'

export default function App() {

  return (
    <ScrollView 
    style={styles.container}
    contentContainerStyle={styles.contenido}
    
    >

      <Text>Recetas</Text>

      <ProviderRecetas>
        <Formulario />
        <Lista />
      </ProviderRecetas>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  contenido: {
    alignItems: 'center',
    padding: 20,
  },
});