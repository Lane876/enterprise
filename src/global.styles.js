import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  font-family: "Roboto", sans-serif;
  padding: 20px 60px;

  @media screen and (max-width: 800px){
      padding: 0px;
  }
}

a {
  text-decoration: none;
  color: black;
}
`;
