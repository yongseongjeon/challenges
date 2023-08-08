import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};
  
  * {
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;
  }

  button {
    margin: 0;
    border: 0;
    padding: 0;
    cursor: pointer;
  }
`;

export default GlobalStyle;
