import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { Feather, FontAwesome5 } from "@expo/vector-icons";

const ITENS_MENU = [
  { icone: "user", texto: "Meu Perfil" },
  { icone: "settings", texto: "Configurações" },
  { icone: "bell", texto: "Notificações" },
  { icone: "log-out", texto: "Saida" },
];

export default function App() {
  return (
    <View style={styles.container}>
      {ITENS_MENU.map((atual) => (
        <ItemMenu icone={atual.icone} texto={atual.texto} key={atual.texto} />
      ))}
      <Image
        source={{
          uri: "https://i.pinimg.com/originals/23/31/71/233171a5756dd0cd246dc09d69515bd0.jpg"
          
        }}
        style={styles.imagem}
      />
      <Image
      source={require('./src/assets/image1.jpg')
          
          
        }
        style={styles.imagem}
      
      />
    </View>
  );
}

function ItemMenu({ icone, texto }) {
  return (
    <TouchableOpacity style={styles.linha}>
      <View style={styles.circulo}>
        <Feather name={icone} size={20} color="rgb(234, 0, 255)" />
      </View>
      <Text style={styles.textoLinha}>{texto}</Text>
      <Feather name="chevron-right" size={24} color="black" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffffad",
    marginTop: 60,
    peddingHorizontal: 16,
  },
  linha: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#000000",
  },
  circulo: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#128ab2",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  textoLinha: {
    backgroundColor: "white",
    fontSize: 16,
    flex: 1,
  },
  imagem: {
    width: 300,
    height: 300,
    borderRadius: 1000,
    alignItems: 'center',
    marginTop: 12
  },
});
