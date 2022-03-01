import React from 'react';
import styled from 'styled-components';
import Main from '../atoms/Main';
import Slider from '../atoms/Slider';
import Container from '../atoms/Container';
import MainList from '../organisms/MainList';

const HomeWrap = styled.div`
  display: flex;
  background: #f7f7fb;
  justify-content: center;
  padding: 60px 5rem;
`;

function Home() {
  return (
    <HomeWrap>
      <Main>
        <>
          <Container>
            <Slider />
          </Container>
          <Container>
            <MainList />
          </Container>
        </>
      </Main>
    </HomeWrap>
  );
}
export default Home;
