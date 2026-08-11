
import { Button, Text, TouchableOpacity, View, StyleSheet } from "react-native";

export default function PrimeiraPagina() {
    const lidarComClique = () => {
        alert('Botão Clicado!');
    }

    return (
        <>
            <View style={estilo.container}>
                
                <Text style={estilo.textoPrincipal}>Higor Bueno de Oliveira</Text>
                <Text style={estilo.textoPrincipal}>Cientista de Dados</Text>

                <View style={estilo.container2}></View>
                <TouchableOpacity style={estilo.botao}>Conectar</TouchableOpacity>
            </View>






        </>
    )
}
const estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'top',
        alignItems: 'center',
        backgroundColor: 'rgba(236, 5, 186, 0.85)',
        fontSize: 25
    },
    container2: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: 150,
        height: 150
        
    },
    textoPrincipal: {
        fontSize: 26,
        fontWeight: 'bold'
    },
    textoBotao: {
        marginTop: 20,
        fontSize: 14,
        fontWeight: 300,
        fontWeight: 'bold'

    },
    botao: {
        marginTop: 12,
        width: 120,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        fontWeight: 'bold',
        fontSize: 25,
        backgroundColor: 'blue'

    }

})