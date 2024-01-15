import React from "react";
import { TouchableOpacity, Text } from "react-native";
import funcaoEstilosPadrao from './estilosBotao';
import estilosBotao from "./estilosBotao";

export default function Botao({pequeno = false, invertido = false, valor, acao}){
    const estilosPadrao = funcaoEstilosPadrao(pequeno, invertido);
    return <TouchableOpacity onPress={acao} style={[estilosPadrao.botao, estilosBotao]}>
        <Text style={estilosPadrao.valor}>{valor}</Text>
    </TouchableOpacity>
}