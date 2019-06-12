import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    box-sizing:border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: Monospace,  sans-serif;
  background-color: #ccc;


input, button {
  outline:none;
  border:none;
  padding:3px;
  border-radius: 2px;
}
}`;

export default GlobalStyle;
