import styled from "styled-components";

export const H1 = styled.h1`
  text-align: center;
  margin-bottom: 10px;
  color: #fff;
`;

export const Aside = styled.aside`
  background-color: #343545;
  height: 100vh;
  padding: 20px;

  @media only screen and (max-width: 768px) {
    height: 100%;
  }
`;

export const Campo = styled.input`
  width: 100%;
  padding: 10px 5px;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  border-radius: 8px;
  background-color: #e6e6e6;
`;

export const Botao = styled.button`
  width: 100%;
  padding: 16px 0;
  font-size: 22px;
  margin-top: 10px;
  border-radius: 8px;
  border: none;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  background-color: #44bd32;
  color: #fff;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #308a35;
  }
`;
