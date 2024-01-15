import React, { useState } from "react";
import { Text, View } from "react-native";
import estilosItem from "./estilosItem";
import CampoInteiro from "../../../components/CampoInteiro";
import estilosGlobal from "../../../estilosGlobal";
import Botao from "../../../components/Botao";

export default function Item({ nome, preco, descricao, quantidade: quantidadeInicial }) {
  const [quantidade, setQuantidade] = useState(quantidadeInicial);
  const [total, setTotal] = useState(preco * quantidadeInicial);

  const atualizaValor = (novaQuantidade) => {
    setQuantidade(novaQuantidade);
    calcularPreco(novaQuantidade);
  };

  const calcularPreco = (novaQuantidade) => {
    setTotal(novaQuantidade * preco);
  };


  return (
    <>
      <View
        style={estilosItem.informacao} >
        <Text style={estilosItem.nome}>{nome}</Text>
        <Text style={estilosItem.preco}>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(preco)}
        </Text>
        <Text style={estilosItem.descricao}>{descricao}</Text>
      </View>
      <View style={estilosItem.carrinho}>
        <View>
          <View style={estilosItem.valor}>
            <Text style={estilosItem.descricao}>Quantidade: </Text>
            <CampoInteiro
              estilos={estilosGlobal.quantidade}
              valor={quantidade}
              acao={atualizaValor}
            />
          </View>
          <View style={estilosItem.valor}>
            <Text style={estilosItem.descricao}>Preço: </Text>
            <Text style={estilosItem.preco}>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(total)}
            </Text>
          </View>
        </View>
        <Botao valor="Remover do carrinho" acao={() => {}} />
      </View>
      <View style={estilosItem.divisor} />
    </>
  );
}
