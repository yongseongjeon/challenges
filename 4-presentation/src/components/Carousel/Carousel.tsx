import styled from "styled-components";
import useFileReader from "../../hooks/useFileReader";
import { useRecoilValue } from "recoil";
import { picturesState } from "../../store/pictures";
import { Color } from "../../styles/color";
import { CommonStyle } from "../../styles/commonStyle";
import { useState } from "react";

const PICTURE_SIZE = "480";

function Carousel() {
  const pictures = useRecoilValue(picturesState);
  const srcs = useFileReader({ files: pictures });
  const [curPictureIdx, setCurPictureIdx] = useState(0);
  const [isMoving, setIsMoving] = useState(false);
  const lastIndex = srcs.length - 1;

  return (
    <CarouselWrapper>
      <ArrowLeftButton onClick={handleClickArrowLeft} disabled={isMoving} />
      <PicturesWrapper>
        <Pictures
          idx={curPictureIdx}
          onTransitionEnd={() => {
            setIsMoving(false);
          }}
        >
          {srcs.map((src) => {
            return <Img src={src} alt="유저가 업로드한 사진입니다." />;
          })}
        </Pictures>
      </PicturesWrapper>
      <ArrowRightButton onClick={handleClickArrowRight} disabled={isMoving} />
    </CarouselWrapper>
  );

  function handleClickArrowLeft() {
    setIsMoving(true);
    const isFirstIndex = curPictureIdx === 0;
    if (isFirstIndex) {
      setCurPictureIdx(lastIndex);
      return;
    }
    setCurPictureIdx(curPictureIdx - 1);
  }

  function handleClickArrowRight() {
    setIsMoving(true);
    const isLastIndex = curPictureIdx === lastIndex;
    if (isLastIndex) {
      setCurPictureIdx(0);
      return;
    }
    setCurPictureIdx(curPictureIdx + 1);
  }
}

export default Carousel;

const CarouselWrapper = styled.div`
  ${CommonStyle.FlexCenter}
  gap: 2rem;
`;

const ArrowLeftButton = styled.button`
  width: 0;
  height: 0;
  border-top: 2rem solid transparent;
  border-bottom: 2rem solid transparent;
  border-right: 2rem solid ${Color.GreenDarnerTail};
  cursor: pointer;

  &:hover {
    border-right: 2rem solid ${Color.ElectronBlue};
  }
`;

const ArrowRightButton = styled.button`
  width: 0;
  height: 0;
  border-top: 2rem solid transparent;
  border-bottom: 2rem solid transparent;
  border-left: 2rem solid ${Color.GreenDarnerTail};
  cursor: pointer;

  &:hover {
    border-left: 2rem solid ${Color.ElectronBlue};
  }
`;

const Img = styled.img`
  width: 30rem;
  height: 30rem;
  ${CommonStyle.BlackBorder}
  ${CommonStyle.BorderRadius}
`;

const PicturesWrapper = styled.div`
  width: 30rem;
  height: 30rem;
  overflow: hidden;
`;

const Pictures = styled.div<{ idx: number }>`
  display: flex;
  transform: ${({ idx }) => `translateX(${-PICTURE_SIZE * idx}px)`};
  transition: 0.25s;
`;
