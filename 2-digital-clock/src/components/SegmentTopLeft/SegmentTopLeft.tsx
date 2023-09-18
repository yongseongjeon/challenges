import { SingleDigit } from "../Digit/Digit";
import Segment from "../Segment/Segment";

interface SegmentTopProps {
  number: SingleDigit;
}

function SegmentTopLeft({ number }: SegmentTopProps) {
  const ACTIVE_NUMBERS = [0, 4, 5, 6, 8, 9];
  return <Segment isOn={ACTIVE_NUMBERS.includes(number)} isColumn />;
}

export default SegmentTopLeft;
