import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  
  body {
    width: 100vw;
    -webkit-font-smoothing: antialiased;
    background: rgba(196, 196, 196, 0.3);
  }
  
  body, input, button {
    font: 16px Roboto, sans-serif;
  }
 
  button {
    cursor: pointer;
  }

  #icon-news, #icon-ref, #icon-del {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;