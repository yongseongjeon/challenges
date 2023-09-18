import styled from "styled-components";
import { COLOR } from "../../constants/color";

interface PlayerNameProps {
  name: string;
  size: "SMALL" | "MEDIUM";
}

function PlayerName({ name, size }: PlayerNameProps) {
  return <Box size={size}>{name}</Box>;
}

export default PlayerName;

const BOX_SIZE = {
  SMALL: {
    WIDTH: "5rem",
    HEIGHT: "2rem",
  },
  MEDIUM: {
    WIDTH: "10rem",
    HEIGHT: "3rem",
  },
};

const Box = styled.div<Pick<PlayerNameProps, "size">>`
  width: ${({ size }) => BOX_SIZE[size].WIDTH};
  height: ${({ size }) => BOX_SIZE[size].HEIGHT};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${COLOR.BLACK};
  border-radius: 10px;
`;
