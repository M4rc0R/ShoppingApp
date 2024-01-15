import React from "react";
import {FlatList} from "react-native";
import Item from "./Item";

const servicos = [
  {
    id: 1,
    nome: "Banho",
    preco: 79.9,
    descricao: "Não de banho no seu gato, se precisar, nós damos",
  },
  {
    id: 2,
    nome: "Vacina V4",
    preco: 89.9,
    descricao: "Uma dose da vacina V4. Seu gato precisa de duas",
  },
  {
    id: 3,
    nome: "Vacina Antirrabica",
    preco: 99.9,
    descricao: "Seu gato precisa de uma por ano",
  },
];

export default function Servicos() {
  return (
    <>
      
      <FlatList
        data={servicos}
        renderItem={({item}) => <Item {...item}/>}
        keyExtractor={({id}) => String(id)}
        removeClippedSubviews={false}
      />
     
    </>
  );
}
