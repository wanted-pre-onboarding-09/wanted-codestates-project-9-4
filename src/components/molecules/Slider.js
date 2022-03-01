import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import PropTypes from 'prop-types';
import SliderButton from '../atoms/SliderButton';
import SliderDots from '../atoms/SliderDots';

function Slider({ contentsDatas }) {
  const [sliderDatas, setSliderDatas] = useState([]);

  useEffect(() => {
    let cloneData = [...contentsDatas];
    cloneData.unshift(cloneData[cloneData.length - 1]);
    cloneData.push(cloneData[1]);
    cloneData = cloneData.map((data, index) => ({
      ...data,
      index_id: index + 1,
    }));
    setSliderDatas(cloneData);
  }, [contentsDatas]);

  const IMG_WIDTH = 42.5;
  const TOTAL_SLIDE = sliderDatas.length;

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
        setSlideIndex(TOTAL_SLIDE - 2);
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
        {sliderDatas.map((data) => (
          <SliderItem key={data.index_id}>
            <Img src={data.image} alt="slide__img" />
          </SliderItem>
        ))}
      </SliderBox>
      <SliderDots curIndex={slideIndex} contentsDatas={contentsDatas} />
      <SliderButton handleBtn={prevSlide} left="calc((100% - 880px)/2);">
        <BsChevronLeft color="#979797" size="2.5rem" />
      </SliderButton>
      <SliderButton handleBtn={nextSlide} right="calc((100% - 880px)/2);">
        <BsChevronRight color="#979797" size="2.5rem" />
      </SliderButton>
    </SliderContainer>
  );
}

Slider.propTypes = {
  contentsDatas: PropTypes.arrayOf(
    PropTypes.shape({
      body: null || PropTypes.string,
      id: PropTypes.number,
      image: PropTypes.string,
      like_cnt: PropTypes.number,
      like_top: PropTypes.number,
      link: PropTypes.string,
      sector_id: PropTypes.number,
      title: PropTypes.string,
      upload_date: PropTypes.string,
    }),
  ).isRequired,
};

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
