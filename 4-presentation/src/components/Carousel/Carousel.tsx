import styled from "styled-components";
import useFileReader from "../../hooks/useFileReader";
import { useRecoilValue } from "recoil";
import { picturesState } from "../../store/pictures";
import { Color } from "../../styles/color";
import { CommonStyle } from "../../styles/commonStyle";

function Carousel() {
  const pictures = useRecoilValue(picturesState);

  const srcs = useFileReader({ files: pictures });

  return (
    <CarouselWrapper>
      <ArrowLeftButton />
      <PicturesWrapper>
        <Pictures>
          {srcs.map((src) => {
            return <Img src={src} alt="유저가 업로드한 사진입니다." />;
          })}
        </Pictures>
      </PicturesWrapper>
      <ArrowRightButton />
    </CarouselWrapper>
  );
}

export default Carousel;

const CarouselWrapper = styled.div`
  ${CommonStyle.FlexCenter}
  gap: 2rem;
`;

const ArrowLeftButton = styled.div`
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

const ArrowRightButton = styled.div`
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
`;

const PicturesWrapper = styled.div`
  width: 30rem;
  height: 30rem;
  overflow: hidden;
`;

const Pictures = styled.div`
  display: flex;
`;
