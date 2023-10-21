import { useSelector } from "react-redux";
import { H2, Main } from "./styles";
import Contatos from "../../components/Contatos";
import { RootReducer } from "../../store";

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos);
  return (
    <>
      <Main>
        <H2>Listas de contatos</H2>
        <ul>
          {itens.map((c) => (
            <li>
              <Contatos
                nome={c.nome}
                email={c.email}
                telefone={c.telefone}
                id={c.id}
              />
            </li>
          ))}
        </ul>
      </Main>
    </>
  );
};

export default ListaDeContatos;
