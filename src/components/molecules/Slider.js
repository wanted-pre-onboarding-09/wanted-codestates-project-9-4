import React, { useEffect, useRef, useState, useCallback } from 'react';
import styled from 'styled-components';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import PropTypes from 'prop-types';
import SliderButton from '../atoms/SliderButton';
import SliderDots from '../atoms/SliderDots';
import SliderInfo from '../atoms/SliderInfo';

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

  // const IMG_WIDTH = 42.5;
  const TOTAL_SLIDE = sliderDatas.length;

  const [slideIndex, setSlideIndex] = useState(1);
  const [speed, setSpeed] = useState(500);
  const [resize, setResize] = useState(window.innerWidth);
  const [imgWidth, setImgWidth] = useState(null);
  const slideRef = useRef(null);

  const moveSlider = (index) => {
    setSlideIndex(index);
  };

  const handleResize = useCallback(() => {
    setResize(window.innerWidth);
  }, []);

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
    if (resize > 768) {
      setImgWidth(42.5);
    } else {
      setImgWidth(24);
    }
    console.log(imgWidth);
    slideRef.current.style.transform = `translate3d( -${
      slideIndex * imgWidth
    }rem, 0, 0)`;
    slideRef.current.style.transition = `${speed}ms ease`;
    const timer = setInterval(nextSlide, 5000);
    window.addEventListener('resize', handleResize);
    return () => {
      clearInterval(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, [slideIndex, speed, nextSlide, resize, handleResize, imgWidth]);

  return (
    <SliderContainer>
      <SliderBox ref={slideRef} width={`${imgWidth * TOTAL_SLIDE}rem`}>
        {sliderDatas.map((data) => (
          <SliderItem key={data.index_id}>
            <Img src={data.image} alt="slide__img" />
            <SliderInfo info={data} />
          </SliderItem>
        ))}
      </SliderBox>
      <SliderDots
        curIndex={slideIndex}
        contentsDatas={contentsDatas}
        moveSlider={moveSlider}
      />
      <SliderButton handleBtn={prevSlide} left="calc((100% - 800px)/2);">
        <BsChevronLeft color="#979797" size="2.5rem" />
      </SliderButton>
      <SliderButton handleBtn={nextSlide} right="calc((100% - 800px)/2);">
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
  @media screen and (max-width: 768px) {
    width: 24rem;
  }
`;

const SliderBox = styled.div`
  width: ${(props) => props.width};
  height: 30rem;
  @media screen and (max-width: 768px) {
    height: 16.2rem;
  }
`;

const SliderItem = styled.div`
  display: table;
  float: left;
`;

const Img = styled.img`
  width: 42.5rem;
  height: 23.75rem;
  border-radius: 14px;
  @media screen and (max-width: 768px) {
    width: 24rem;
    height: 12rem;
  }
`;
export default Slider;
