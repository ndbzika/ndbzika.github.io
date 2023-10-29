import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

const GlobalStyles = styled.createGlobalStyle`
  html {
    box-sizing: border-box;
    background: #f5f4f0;
    display: block;
    height: 100%;
    max-width: 640px;
    margin: 0 auto;
    padding: 0;
  }

  body {
    background-color: #fafafa;
    min-height: 100vh;
    padding: 1rem;
    margin-top: 0;
    font-family: Verdana;
  }
`;

export default GlobalStyles;
