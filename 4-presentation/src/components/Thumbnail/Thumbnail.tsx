import { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { CommonStyle } from "../../styles/commonStyle";
import { Color } from "../../styles/color";
import { picturesState } from "../../store/pictures";

interface Thumbnail {
  src: string;
  idx: number;
  isActive: boolean;
  setCurPictureIdx: Dispatch<SetStateAction<number>>;
  onClick: () => void;
}

function Thumbnail({ src, idx, isActive, setCurPictureIdx, onClick }: Thumbnail) {
  const [isHover, setIsHover] = useState(false);
  const [pictures, setPictures] = useRecoilState(picturesState);

  return (
    <ThumbnailWrapper
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <Img src={src} alt="유저가 업로드한 사진입니다." $isActive={isActive} onClick={onClick}></Img>
      {isHover && (
        <DeleteButton
          onClick={() => {
            const newPictures = pictures.filter((_, i) => i !== idx);
            setPictures(newPictures);
            setCurPictureIdx(0);
          }}
        >
          X
        </DeleteButton>
      )}
    </ThumbnailWrapper>
  );
}

export default Thumbnail;

const ThumbnailWrapper = styled.div``;

const Img = styled.img<{ $isActive: boolean }>`
  width: 5rem;
  height: 5rem;
  ${CommonStyle.BlackBorder}
  ${CommonStyle.BorderRadius}
  border-color: ${({ $isActive }) => ($isActive ? Color.ElectronBlue : Color.Black)};
  cursor: pointer;
`;

const DeleteButton = styled.button`
  position: absolute;
  font-size: 1.2rem;
  background-color: transparent;
  right: 7px;
  top: 5px;
`;