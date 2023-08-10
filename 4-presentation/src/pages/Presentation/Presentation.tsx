import styled from "styled-components";
import { PageWrapper } from "../../styles/components/PageWrapper.styled";
import { CommonStyle } from "../../styles/commonStyle";
import Carousel from "../../components/Carousel/Carousel";
import ThumbnailList from "../../components/ThumbnailList/ThumbnailList";

function Presentation() {
  const activeThumnailIndex = 1;
  const totalPictureNumber = 10;

  return (
    <PageWrapper>
      <PresentationWrapper>
        <Carousel />
        <ThumbnailList activeThumnailIndex={activeThumnailIndex} />
        <ThumnailIndexIndicator>
          {activeThumnailIndex} / {totalPictureNumber}
        </ThumnailIndexIndicator>
      </PresentationWrapper>
    </PageWrapper>
  );
}

export default Presentation;

const PresentationWrapper = styled.div`
  ${CommonStyle.FlexColumn}
  gap: 2rem;
`;

const ThumnailIndexIndicator = styled.div`
  width: 38rem;
  ${CommonStyle.FlexCenter}
`;
