import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

function Slider() {
  const IMG_WIDTH = 42.5;

  // 임시데이터
  const datas = [
    {
      img: 'https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg',
    },
    { img: 'https://picsum.photos/seed/picsum/200/300' },
    {
      img: 'https://picsum.photos/id/237/200/300',
    },
    {
      img: 'https://www.google.com/logos/doodles/2022/dominican-republic-independence-day-2022-6753651837109594-2xa.gif',
    },
    {
      img: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
    },
  ];

  const TOTAL_SLIDE = datas.length;
  const [slideIndex, setSlideIndex] = useState(0);
  const [speed, setSpeed] = useState(500);

  const slideRef = useRef(null);
  const prevSlide = () => {
    if (slideIndex === 0) {
      setTimeout(() => {
        setSpeed(0);
        setSlideIndex(TOTAL_SLIDE);
      }, 500);
    } else {
      setSpeed(500);
      setSlideIndex(slideIndex - 1);
    }
  };
  const nextSlide = () => {
    if (slideIndex === TOTAL_SLIDE) {
      setTimeout(() => {
        setSpeed(0);
        setSlideIndex(0);
      }, 500);
    } else if (slideIndex < TOTAL_SLIDE - 1) {
      setSpeed(500);
      setSlideIndex(slideIndex + 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transform = `translate3d( -${
      slideIndex * IMG_WIDTH
    }rem, 0, 0)`;
    slideRef.current.style.transition = `${speed}ms ease`;
    console.log(slideIndex);
    const timer = setInterval(nextSlide, 5000);

    return () => clearInterval(timer);
  }, [slideIndex, speed, nextSlide]);

  return (
    <Container>
      <SliderContainer ref={slideRef}>
        {datas.map((data) => (
          <Slide key={data.img}>
            <img src={data.img} alt="slide img" />
          </Slide>
        ))}
      </SliderContainer>
      <Center>
        <button type="button" onClick={prevSlide}>
          이전
        </button>
        <button type="button" onClick={nextSlide}>
          다음
        </button>
      </Center>
    </Container>
  );
}
const Container = styled.div`
  width: 42.5rem;
  margin: auto;
  overflow: hidden;
`;

const SliderContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 2em;
  display: flex;
`;

const Slide = styled.div`
  & img {
    width: 42.5rem;
    height: 23.75rem;
  }
`;

const Center = styled.div`
  text-align: center;
`;

export default Slider;
