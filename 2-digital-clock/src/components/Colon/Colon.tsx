import styled from "styled-components";
import { Color } from "../../style/color";
import { useEffect, useState } from "react";

function Colon() {
  return (
    <Container>
      <Circle />
      <Circle />
    </Container>
  );
}

export default Colon;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  position: relative;
  top: 46px;
  right: 36px;
`;

const Circle = styled.div`
  width: 1rem;
  height: 1rem;
  border: 1px solid ${Color.BLACK};
  border-radius: 10px;

  @keyframes blink {
    0%,
    100% {
      background-color: ${Color.WHITE};
    }
    50% {
      background-color: ${Color.GREEN};
    }
  }
  animation: blink 2s steps(1) infinite;
`;
