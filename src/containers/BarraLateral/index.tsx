import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { Campo, Aside, Botao, H1 } from "./styles";
import { cadastrar } from "../../store/reducers/contatos";

const Barralateral = () => {
  const dispatch = useDispatch();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const adicionarContato = (evento: FormEvent) => {
    evento.preventDefault();

    dispatch(
      cadastrar({
        nome,
        email,
        telefone,
      })
    );
  };
  return (
    <Aside>
      <H1>Adicione seu contato</H1>
      <form onSubmit={adicionarContato}>
        <Campo
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          type="text"
          placeholder="Nome"
        />

        <Campo
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="E-mail"
        />

        <Campo
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          type="tel"
          placeholder="Telefone"
        />

        <Botao type="submit">Adicionar</Botao>
      </form>
    </Aside>
  );
};

export default Barralateral;
