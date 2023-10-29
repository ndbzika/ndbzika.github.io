import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

const GlobalStyles = styled.createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    background: #808080;
  }

  body {
    font-family: "Roboto", sans-serif;
  }
`;

export default GlobalStyles;
