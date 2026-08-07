import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Aura from './src/components/Aura';

import {Aura9k} from './src/components/Aura';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Olá Mundo</Text>
      <Text>Voce Sabe trocar Chuveiro?</Text>
      <Text style={styles.txtNegrito}>Voce farma aura?</Text>
      <Text style={[styles.txtDiferente, styles.txtNegrito]}>Voce Não tem<Text>Echo</Text> </Text>
      
      <Aura></Aura>

      <Aura9k></Aura9k>

      <Text style={[styles.txtDiferente, styles.txtNegrito]}>
        {10+20+15-5+30-12+9}
      </Text>

      <StatusBar style="auto" />
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
  txtNegrito: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  txtDiferente: {
    marginTop: 10,
    color: 'red',

  },


});
