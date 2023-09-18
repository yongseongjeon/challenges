import { SingleDigit } from "../Digit/Digit";
import Segment from "../Segment/Segment";

interface SegmentTopProps {
  number: SingleDigit;
}

function SegmentTop({ number }: SegmentTopProps) {
  const ACTIVE_NUMBERS = [0, 2, 3, 5, 6, 7, 8, 9];
  return <Segment isOn={ACTIVE_NUMBERS.includes(number)} />;
}

export default SegmentTop;
