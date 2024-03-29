import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: "Roboto", 'Work Sans', sans serif;
  min-height: 100vh;
  background-color: #fff;
}


a{
  color: inherit;
  text-decoration: none;
}

button {
  font-family: inherit;
  border-radius: 20px;
  cursor: pointer;
  border: none;
  background-color: transparent
}

h1,
h2 {
  font-size: 2rem;
  margin: 0;
  color: #000;
}

span{
  padding: 0;
  margin: 0;
  color: #000;
}

`;

export default GlobalStyles;
