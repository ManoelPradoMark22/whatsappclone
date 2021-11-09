import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #EDEDED;
    --background-hover: #F5F5F5;
    --background-light: #F6F6F6;
    --backgroundBody: #D2DBDC;
    
    --iconColor: #919191;

    --divide: #DDDDDD;
    --divide-light: #EEEEEE;
    
    --shape: #FFFFFF;
    --text-dark: #000000;
    --text-light: #999999;
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
