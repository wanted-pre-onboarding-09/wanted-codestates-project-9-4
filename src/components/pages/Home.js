import React from 'react';
import styled from 'styled-components';
import Main from '../atoms/Main';
import Slider from '../atoms/Slider';
import Test from './Test';

const HomeBox = styled.div`
  margin: 0 auto;
  padding-top: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f7f7fb;
`;

const Carousel = styled.div`
  width: 55rem;
  height: 30rem;
`;

const CardBox = styled.div`
  margin: 2rem 0;
  width: 55rem;
`;

function Home() {
  return (
    <HomeBox>
      <Carousel>
        <Slider />
      </Carousel>
      <CardBox>
        <Main>
          <Test />
        </Main>
      </CardBox>
    </HomeBox>
  );
}
export default Home;
