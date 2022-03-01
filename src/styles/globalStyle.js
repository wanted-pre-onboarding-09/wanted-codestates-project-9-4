import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    
  }

ul{
    list-style: none;
}

button{
    cursor: pointer;
    outline: 0;
}

`;

export default GlobalStyle;
