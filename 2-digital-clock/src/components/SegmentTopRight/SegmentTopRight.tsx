import { SingleDigit } from "../Digit/Digit";
import Segment from "../Segment/Segment";

interface SegmentTopRightProps {
  number: SingleDigit;
}

function SegmentTopRight({ number }: SegmentTopRightProps) {
  const ACTIVE_NUMBERS = [0, 1, 2, 3, 4, 7, 8, 9];
  return <Segment isOn={ACTIVE_NUMBERS.includes(number)} isColumn />;
}

export default SegmentTopRight;
