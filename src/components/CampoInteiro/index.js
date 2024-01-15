import React from "react";
import { TextInput } from "react-native";
import estilosPadrao from "./estilosCampo";

export default function CampoInteiro({valor, acao, estilos}){
    const atualiza = (novoValor, acaoRetorno) => {
        const verificarNumero = novoValor.match(/^[0-9]*$/);
        if (!verificarNumero) return;

        const removeZero = novoValor.replace(/^(0)(.+)/, '$2');

        acaoRetorno(removeZero);
    }
    const numeroString = String(valor);
    return <TextInput 
        style={[estilosPadrao.campo, estilos]}
        keyboardType="number-pad"
        selectTextOnFocus
        onChangeText={(novoValor)=> {atualiza(novoValor, acao)}}
        value={numeroString}
    />
}