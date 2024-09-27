// src/assets/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: #f9f9f9;
    color: #333;
    line-height: 1.6;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3 {
    margin-bottom: 1rem;
    color: #2c3e50;
  }

  p {
    margin-bottom: 1rem;
    color: #7f8c8d;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    background-color: #3498db;
    color: white;
    font-weight: bold;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #2980b9;
    }
  }

  .cta {
    background-color: #e74c3c;
    padding: 0.75rem 1.5rem;
    color: white;
    text-transform: uppercase;
    font-size: 1.1rem;
    border-radius: 50px;
    transition: transform 0.3s ease, background-color 0.3s ease;

    &:hover {
      background-color: #c0392b;
      transform: translateY(-5px);
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1rem;
    }

    .cta {
      padding: 0.5rem 1rem;
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 2rem;
    }

    .cta {
      font-size: 0.9rem;
    }
  }
`;

export default GlobalStyle;
