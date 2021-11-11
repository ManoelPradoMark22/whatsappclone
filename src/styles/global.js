import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #EDEDED;
    --background-hover: #F5F5F5;
    --background-light: #F6F6F6;
    --backgroundBody: #D2DBDC;
    --backgroundBodyChat: #E5DDD5;
    --backgroundChat: #F8F9FA;
    --backgroundChatActive: #EBEBEB;
    
    --primary: #00bfa5;
    --primary-active: #009688;
    --primary-light: #4ADF83;

    --messageAuthor: #DCF8C6;
    
    --iconColor: #919191;
    --iconMicActive: #126ECE;

    --divide: #DDDDDD;
    --divide-medium: #CCCCCC;
    --divide-light: #EEEEEE;    
    
    --shape: #FFFFFF;
    --text-dark: #000000;
    --text-medium: #525252;
    --text-submedium: #777777;
    --text-light: #999999;

    --inputChat: #4a4a4a;

    --scroolbar: rgba(0, 0, 0, 0.2);
  }

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--scroolbar);
  }

  * {
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; //15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }

  body {
    background-color: var(---backgroundBody);
    -webkit-font-smoothing: antialiased;
    margin: 0;
    font-family: 'Segoe UI', Helvetica Neue, Helvetica, Lucida Grande, Arial;
  }
`;
