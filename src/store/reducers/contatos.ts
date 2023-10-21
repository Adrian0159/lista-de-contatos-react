import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Contato from "../../models/Contato";

type ContatosState = {
  itens: Contato[];
};

const initialState: ContatosState = {
  itens: [
    {
      nome: "Adriano",
      email: "adriano@hotmail.com",
      telefone: "(87) 99999-9999",
      id: 1,
    },
    {
      nome: "João",
      email: "joao@gmail.com",
      telefone: "(88) 99999-8888",
      id: 2,
    },
    {
      nome: "Maria",
      email: "maria@gmail.com",
      telefone: "(89) 99999-7777",
      id: 3,
    },
  ],
};

const contatosSlice = createSlice({
  name: "contatos",
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      );
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, "id">>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      );
      if (contatoJaExiste) {
        alert("Este contato já existe");
      } else {
        const ultimoContato = state.itens[state.itens.length - 1];
        const novoContato = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1,
        };
        state.itens.push(novoContato);
      }
    },
  },
});

export const { remover, cadastrar } = contatosSlice.actions;

export default contatosSlice.reducer;
