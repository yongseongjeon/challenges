import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { CommonStyle } from "./commonStyle";

const GlobalStyle = createGlobalStyle`
  ${reset};
  
  * {
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;
  }

  #root {
    height: inherit;
    display: flex;
    ${CommonStyle.Center}
  }

  button {
    margin: 0;
    border: 0;
    padding: 0;
    cursor: pointer;
  }
`;

export default GlobalStyle;
