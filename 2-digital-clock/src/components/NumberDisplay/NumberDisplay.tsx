import styled from "styled-components";
import Digit from "../Digit/Digit";
import Colon from "../Colon/Colon";

interface NumberDisplayProps {
  time: string;
}

function NumberDisplay({ time }: NumberDisplayProps) {
  const [first, second, third, fourth] = time.split("").map(Number);
  return (
    <Container>
      <Digit number={first} />
      <Digit number={second} />
      <Colon />
      <Digit number={third} />
      <Digit number={fourth} />
    </Container>
  );
}

export default NumberDisplay;

const Container = styled.div`
  display: flex;
`;
