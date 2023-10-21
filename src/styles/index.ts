import styled, { createGlobalStyle } from "styled-components";

const EstliloGlobal = createGlobalStyle`

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  

    body{
      background-color: #e6e6e6;
    }
}
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 300px auto;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

export default EstliloGlobal;
