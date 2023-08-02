import styled from "styled-components";
import { Color } from "../../style/color";

interface SegmentProps {
  isOn?: boolean;
  isColumn?: boolean;
}

function Segment({ isOn, isColumn }: SegmentProps) {
  return <Container isOn={isOn} isColumn={isColumn}></Container>;
}

export default Segment;

const Container = styled.div<SegmentProps>`
  width: 4rem;
  height: 1rem;
  border: 1px solid black;
  border-radius: 10px;
  background-color: ${({ isOn }) => isOn && Color.GREEN};
  transform: ${({ isColumn }) => isColumn && "rotate(90deg)"};
`;
