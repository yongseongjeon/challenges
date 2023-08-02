import { SingleDigit } from "../Digit/Digit";
import Segment from "../Segment/Segment";

interface SegmentBottomLeftProps {
  number: SingleDigit;
}

function SegmentBottomLeft({ number }: SegmentBottomLeftProps) {
  const ACTIVE_NUMBERS = [0, 2, 6, 8];
  return <Segment isOn={ACTIVE_NUMBERS.includes(number)} isColumn />;
}

export default SegmentBottomLeft;
