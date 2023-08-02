import { COLOR } from "../../constants/color";

interface BarProps {
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
}

function Bar({ x, y, width, height, color }: BarProps) {
  return (
    <>
      <rect x={x} y={y} width={width} height={height} style={{ fill: color }} />
    </>
  );
}

export default Bar;
