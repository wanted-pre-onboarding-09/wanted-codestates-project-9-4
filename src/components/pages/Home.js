import React from 'react';
import styled from 'styled-components';
import Main from '../atoms/Main';
import Container from '../atoms/Container';
import MainList from '../organisms/MainList';
import MainSlider from '../organisms/MainSlider';

const HomeWrap = styled.div`
  display: flex;
  background: #f7f7fb;
  justify-content: center;
  padding: 60px 5rem 0;
`;

function Home() {
  return (
    <HomeWrap>
      <Main>
        <>
          <Container>
            <MainSlider />
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
