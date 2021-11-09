import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: #D2DBDC;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    font-family: 'Segoe UI', Helvetica Neue, Helvetica, Lucida Grande, Arial;
  }
`;
