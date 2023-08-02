import styled from "styled-components";
import Segment from "../../components/Segment/Segment";

function Home() {
  return (
    <Container>
      <Segment isColumn />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  padding: 2rem;
`;
