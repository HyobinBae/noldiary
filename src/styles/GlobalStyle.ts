import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
export const GlobalStyle = createGlobalStyle`  

  ${reset}

  *{
  box-sizing: border-box;
  font-family: 'Nanum Gothic', 'Open Sans', sans-serif;
  }

  body{
    font-family: 'Nanum Gothic', 'Open Sans', sans-serif;
  }

  div{font-family: 'Nanum Gothic', 'Open Sans', sans-serif;}

  a{
    color:inherit;
    text-decoration: none;
    cursor: pointer;
  }

  /* ul, ol, li {
    list-style: none;
  } */

`;
