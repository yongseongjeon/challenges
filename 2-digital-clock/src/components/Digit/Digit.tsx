import styled from "styled-components";
import SegmentBottom from "../SegmentBottom/SegmentBottom";
import SegmentBottomLeft from "../SegmentBottomLeft/SegmentBottomLeft";
import SegmentBottomRight from "../SegmentBottomRight/SegmentBottomRight";
import SegmentMiddle from "../SegmentMiddle/SegmentMiddle";
import SegmentTop from "../SegmentTop/SegmentTop";
import SegmentTopLeft from "../SegmentTopLeft/SegmentTopLeft";
import SegmentTopRight from "../SegmentTopRight/SegmentTopRight";

export enum SingleDigit {
  ZERO = 0,
  ONE,
  TWO,
  THREE,
  FOUR,
  FIVE,
  SIX,
  SEVEN,
  EIGHT,
  NINE,
}

interface DigitProps {
  number: SingleDigit;
}

function Digit({ number }: DigitProps) {
  return (
    <Container>
      <SegmentTop number={number} />
      <Wrapper>
        <SegmentTopLeft number={number} />
        <SegmentTopRight number={number} />
      </Wrapper>
      <SegmentMiddle number={number} />
      <Wrapper>
        <SegmentBottomLeft number={number} />
        <SegmentBottomRight number={number} />
      </Wrapper>
      <SegmentBottom number={number} />
    </Container>
  );
}

export default Digit;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  position: relative;
  left: -37px;
`;
