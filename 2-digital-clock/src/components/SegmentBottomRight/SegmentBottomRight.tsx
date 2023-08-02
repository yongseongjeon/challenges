import { SingleDigit } from "../Digit/Digit";
import Segment from "../Segment/Segment";

interface SegmentBottomRightProps {
  number: SingleDigit;
}

function SegmentBottomRight({ number }: SegmentBottomRightProps) {
  const ACTIVE_NUMBERS = [0, 1, 3, 4, 5, 6, 7, 8, 9];
  return <Segment isOn={ACTIVE_NUMBERS.includes(number)} isColumn />;
}

export default SegmentBottomRight;
