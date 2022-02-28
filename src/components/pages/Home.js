import React from 'react';
import styled from 'styled-components';

const HomeBox = styled.div`
  margin: 2rem auto;
  width: 66rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Carousel = styled.div`
  width: 55rem;
  height: 25rem;
  border: 1px solid black;
`;

const CardBox = styled.div`
  margin: 2rem 0;
  width: 55rem;
  height: 25rem;
  border: 1px solid black;
`;

function Home() {
  return (
    <HomeBox>
      <Carousel>Carousel</Carousel>
      <CardBox>Card</CardBox>
    </HomeBox>
  );
}
export default Home;
