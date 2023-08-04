import styled from "styled-components";
import { Color } from "../../style/color";
import { useEffect, useState } from "react";

function Colon() {
  const [isBlink, setIsBlink] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsBlink(!isBlink);
    }, 1000);
  }, [isBlink]);

  return (
    <Container>
      <Circle $isBlink={isBlink} />
      <Circle $isBlink={isBlink} />
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

const Circle = styled.div<{ $isBlink: boolean }>`
  width: 1rem;
  height: 1rem;
  border: 1px solid ${Color.BLACK};
  border-radius: 10px;
  background-color: ${({ $isBlink }) => ($isBlink ? Color.GREEN : Color.WHITE)};
`;
