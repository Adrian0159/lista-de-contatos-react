import styled from "styled-components";

export const H2 = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const Main = styled.main`
  padding: 20px;
  height: 100vh;
  overflow-y: scroll;
`;
