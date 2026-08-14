import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Caixa from './src/components/Caixa';

export default function App() {
  return (

    <>
      <View>
        <View style={styles.containerPai}>

        </View>
        <View style={styles.container}>
          <Caixa cor="#bbff00" numero={1} />
          <Caixa cor="#fffffff5" numero={2} />
          <Caixa cor="#0011ff" numero={3} />
          <Caixa cor="#00ffff" numero={4} />
          <Caixa cor="#fd0054" numero={5} />
          <Caixa cor="#fd0000" numero={6} />
          <Caixa cor="#d400ff" numero={7} />
          <StatusBar style="auto" />
        </View>
        <View style={styles.container2}>
          <Caixa cor="#1900fd20" numero={8} />
        </View>
      </View>
    </>

  );
}

const styles = StyleSheet.create({
  containerPai: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    flexDirection: 'row', //TROCAR O EIXO PRINCIPAL
    backgroundColor: '#01fa7d',
    alignItems: 'flex-start', //SECUNDARIO 
    justifyContent: 'space-evenly',  //SEMPRE CENTRALIZAR //EIXO PRIONCIPAL
    flexWrap: 'wrap'

  },
  container2: {
    flex: 1,
    backgroundColor: '#ffdadada',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end'
  }
});
