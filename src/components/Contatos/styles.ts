import styled from "styled-components";

export const Card = styled.div`
  background-color: #343545;
  padding: 16px;
  border-radius: 5px;
  margin-bottom: 20px;
  box-shadow: 2px 3px 2px 2px rgba(0, 0, 0, 1);
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

export const NomeContato = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

export const EmailContato = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-top: 8px;
`;
export const TelefoneContato = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-top: 8px;
`;

export const Botao = styled.button`
  padding: 4px 8px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 18px;
  border: none;
  cursor: pointer;
  background-color: #c23616;
  color: #fff;
`;
