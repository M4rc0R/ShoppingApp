import React from "react";
import { View, Text } from "react-native";
import estilosStatusCarrinho from './estilosStatusCarrinho';
import Botao from "../Botao";


export default function StatusCarrinho({total}){
    return(
    <View style={estilosStatusCarrinho.conteudo}>
        <View style={estilosStatusCarrinho.total}>
            <Text style={estilosStatusCarrinho.descricao}>Total do Carrinho: </Text>
            <Text style={estilosStatusCarrinho.valor}>{Intl.NumberFormat('pt-BR', {
                style: 'currency', currency: 'BRL'
            }).format(total)}</Text>
        </View>
        <View style={estilosStatusCarrinho.botao}>
            <Botao valor='Concluir pedido' invertido/>
        </View>
    </View>
    )
}