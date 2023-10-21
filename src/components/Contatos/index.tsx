import { useDispatch } from "react-redux";
import * as S from "./styles";
import { remover } from "../../store/reducers/contatos";
import Contato from "../../models/Contato";

type Props = Contato;

const Contatos = ({ nome, email, telefone, id }: Props) => {
  const dispatch = useDispatch();

  return (
    <>
      <S.Card>
        <div>
          <S.NomeContato>Nome: {nome}</S.NomeContato>
          <S.EmailContato>E-mail: {email}</S.EmailContato>
          <S.TelefoneContato>Telefone: {telefone}</S.TelefoneContato>
        </div>
        <S.Botao onClick={() => dispatch(remover(id))}>X</S.Botao>
      </S.Card>
    </>
  );
};

export default Contatos;
