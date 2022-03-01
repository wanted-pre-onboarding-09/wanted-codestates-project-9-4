import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import SliderButton from '../atoms/SliderButton';
import SliderDots from '../atoms/SliderDots';

function Slider() {
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
      img: 'https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg',
    },
    { img: 'https://picsum.photos/seed/picsum/200/300' },
  ];

  const IMG_WIDTH = 42.5;
  const TOTAL_SLIDE = datas.length;

  const [slideIndex, setSlideIndex] = useState(1);
  const [speed, setSpeed] = useState(500);
  const slideRef = useRef(null);

  const prevSlide = () => {
    if (slideIndex >= 0) {
      setSpeed(500);
      setSlideIndex((curIndex) => curIndex - 1);
    }
    if (slideIndex === 1) {
      setTimeout(() => {
        setSpeed(0);
        setSlideIndex(3);
      }, 500);
    }
  };

  const nextSlide = () => {
    if (slideIndex < TOTAL_SLIDE - 1) {
      setSpeed(500);
      setSlideIndex((curIndex) => curIndex + 1);
    }
    if (slideIndex === TOTAL_SLIDE - 2) {
      setTimeout(() => {
        setSpeed(0);
        setSlideIndex(1);
      }, 500);
    }
  };

  useEffect(() => {
    slideRef.current.style.transform = `translate3d( -${
      slideIndex * IMG_WIDTH
    }rem, 0, 0)`;
    slideRef.current.style.transition = `${speed}ms ease`;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [slideIndex, speed, nextSlide]);

  return (
    <SliderContainer>
      <SliderBox ref={slideRef}>
        {datas.map((data) => (
          <SliderItem key={data}>
            <Img src={data.img} alt="slide__img" />
          </SliderItem>
        ))}
      </SliderBox>
      <SliderDots curIndex={slideIndex} />
      <SliderButton handleBtn={prevSlide} left="calc((100% - 880px)/2);">
        <BsChevronLeft color="#979797" size="2.5rem" />
      </SliderButton>
      <SliderButton handleBtn={nextSlide} right="calc((100% - 880px)/2);">
        <BsChevronRight color="#979797" size="2.5rem" />
      </SliderButton>
    </SliderContainer>
  );
}
const SliderContainer = styled.div`
  width: 42.5rem;
  overflow: hidden;
  margin: auto;
  margin-top: 40px;
`;

const SliderBox = styled.div`
  width: 212.5rem;
  height: 23.75rem;
`;

const SliderItem = styled.div`
  display: table;
  float: left;
`;

const Img = styled.img`
  width: 42.5rem;
  height: 23.75rem;
  border-radius: 14px;
`;
export default Slider;
