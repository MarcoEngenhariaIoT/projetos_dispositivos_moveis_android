import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CadastrarDados from './cadastro';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>CADASTRO</Text>
      <StatusBar style="auto" />
    </View>
    
  );
  <CadastrarDados />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
