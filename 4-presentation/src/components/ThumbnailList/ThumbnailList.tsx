import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { picturesState } from "../../store/pictures";
import useFileReader from "../../hooks/useFileReader";
import { CommonStyle } from "../../styles/commonStyle";
import { Color } from "../../styles/color";

interface ThumbnailListProp {
  activeThumnailIndex: number;
}

function ThumbnailList({ activeThumnailIndex }: ThumbnailListProp) {
  const pictures = useRecoilValue(picturesState);
  const srcs = useFileReader({ files: pictures });

  return (
    <ThumbnailListWrapper>
      <ImgWrapper>
        {srcs.map((src, idx) => {
          return <Img src={src} alt="유저가 업로드한 사진입니다." isActive={idx === activeThumnailIndex} />;
        })}
      </ImgWrapper>
    </ThumbnailListWrapper>
  );
}

export default ThumbnailList;

const ThumbnailListWrapper = styled.div`
  display: flex;
`;

const ImgWrapper = styled.div`
  display: flex;
  width: 38rem;
  justify-content: space-between;
`;

const Img = styled.img<{ isActive: boolean }>`
  width: 5rem;
  height: 5rem;
  ${CommonStyle.BlackBorder}
  ${CommonStyle.BorderRadius}
  border-color: ${({ isActive }) => (isActive ? Color.ElectronBlue : Color.Black)};
`;
