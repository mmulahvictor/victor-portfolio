// src/assets/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  a {
    color: #61dafb;
    text-decoration: none;
  }

  a:hover {
    color: #21a1f1;
  }

  button {
    background-color: #61dafb;
    border: none;
    padding: 10px;
    color: white;
    cursor: pointer;
  }
`;

export default GlobalStyle;
