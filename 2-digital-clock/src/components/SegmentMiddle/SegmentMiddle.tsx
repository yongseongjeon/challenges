import { SingleDigit } from "../Digit/Digit";
import Segment from "../Segment/Segment";

interface SegmentMiddleProps {
  number: SingleDigit;
}

function SegmentMiddle({ number }: SegmentMiddleProps) {
  const ACTIVE_NUMBERS = [2, 3, 4, 5, 6, 8, 9];
  return <Segment isOn={ACTIVE_NUMBERS.includes(number)} />;
}

export default SegmentMiddle;
