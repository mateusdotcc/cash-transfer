import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export default createGlobalStyle`
  ${normalize};

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: 'Inter-Regular', 'Helvetica', 'Arial', sans-serif;

    font-size: 1.6rem;
    -webkit-tap-highlight-color: transparent;
  }

  button {
    padding: 0;
    margin: 0;
    user-select: none;
    background-color: transparent;
    border: 0;
    outline: none;
    cursor: pointer;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  img {
    max-width: 100%;
    user-select: none;
  }

  p {
    margin: 0;
  }

  input {
    outline: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
  }

  ::selection {
    color: #ffffff;
    background-color: #000000;
  }
`;
