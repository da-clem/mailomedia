import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif !important;
    margin: 0;
    overflow-x: hidden;
    width: 100vw;
    min-height: 100vh;
  }

  #root {
    overflow-x: hidden;
    width: 100vw;
  }
`;
