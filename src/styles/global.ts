import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body, html {
    background-color: #100E1D;
    font-family: 'Raleway', sans-serif;
    color: #E7E7EB;
    font-size: 16px;
    font-weight: 500;
    min-height: 100vh;
    min-width: 100%;
  }
`;
