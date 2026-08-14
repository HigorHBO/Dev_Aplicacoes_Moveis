import { Text, View, StyleSheet } from "react-native";

export default function Caixa({ cor, numero }) {      //SEMPRE PROCURAR  
    return (   //SEMPRE QUANDO FOR 
        <View style={[estilo.caixa, {backgroundColor: cor}]}>
            <Text style={estilo.texto}>{numero}</Text>
        </View>
    )
}

const estilo = StyleSheet.create({
    caixa: {
        width: 80, //LADO ESQ
        height: 80, //LADO DIR
        margin: 8, //MARGEN
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    texto: {
        color: '#050302',
        fontWeight: 'bold' //DEIXA A FONTE NEGRITA
    }
})