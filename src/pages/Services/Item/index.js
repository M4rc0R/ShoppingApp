import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import estilosItem from "./estilosItem";
import CampoInteiro from "../../../components/CampoInteiro";
import estilosGlobal from "../../../estilosGlobal";
import Botao from "../../../components/Botao";

export default function Item({ nome, preco, descricao }) {
  const [quantidade, setQuantidade] = useState(1);
  const [total, setTotal] = useState(preco);
  const [expandir, setExpandir] = useState(false);

  const atualizaValor = (novaQuantidade) => {
    setQuantidade(novaQuantidade);
    calcularPreco(novaQuantidade);
  };

  const calcularPreco = (novaQuantidade) => {
    setTotal(novaQuantidade * preco);
  };

  const inverteExpandir = () => {
    setExpandir(!expandir);
    atualizaValor(1);
  };

  return (
    <>
      <TouchableOpacity
        style={estilosItem.informacao}
        onPress={inverteExpandir}
      >
        <Text style={estilosItem.nome}>{nome}</Text>
        <Text style={estilosItem.preco}>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(preco)}
        </Text>
        <Text style={estilosItem.descricao}>{descricao}</Text>
      </TouchableOpacity>
      {expandir && (
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
          <Botao valor="Adicionar ao carrinho" acao={() => {}} />
        </View>
      )}
      <View style={estilosItem.divisor} />
    </>
  );
}
