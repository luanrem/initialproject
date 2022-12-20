import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    color: black;
    background: transparent;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 400 16px Roboto, sans-serif;
  }
`;