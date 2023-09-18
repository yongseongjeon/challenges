import { SingleDigit } from "../Digit/Digit";
import Segment from "../Segment/Segment";

interface SegmentBottomProps {
  number: SingleDigit;
}

function SegmentBottom({ number }: SegmentBottomProps) {
  const ACTIVE_NUMBERS = [0, 2, 3, 5, 6, 8, 9];
  return <Segment isOn={ACTIVE_NUMBERS.includes(number)} />;
}

export default SegmentBottom;
