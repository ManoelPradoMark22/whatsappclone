import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #EDEDED;
    --background-light: #F6F6F6;
    --backgroundBody: #D2DBDC;
    
    --iconColor: #919191;

    --divide: #DDDDDD;
    --divide-light: #EEEEEE;
    
    --shape: #FFFFFF;
  }

  * {
    box-sizing: border-box;
  }

  body {
    background-color: var(---backgroundBody);
    -webkit-font-smoothing: antialiased;
    margin: 0;
    font-family: 'Segoe UI', Helvetica Neue, Helvetica, Lucida Grande, Arial;
  }
`;
