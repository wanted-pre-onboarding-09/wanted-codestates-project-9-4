import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
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
  const TOTAL_SLIDE = sliderDatas.length;

  const [slideIndex, setSlideIndex] = useState(1);
  const [speed, setSpeed] = useState(500);
  const [resize, setResize] = useState(window.innerWidth);
  const [imgWidth, setImgWidth] = useState(42.5);
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

  let startX;
  let endX;

  const onTouchStart = (event) => {
    startX = event.touches[0].pageX;
  };
  const onTouchEnd = (event) => {
    endX = event.changedTouches[0].pageX;
    if (startX > endX) {
      nextSlide();
    } else {
      prevSlide();
    }
  };
  return (
    <SliderContainer>
      <SliderBox ref={slideRef}>
        {sliderDatas.map((data) => (
          <SliderItem
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            key={data.index_id}
          >
            <StyledLink to={`/detail/${data.id}`}>
              <Img src={data.image} alt="slide__img" />
              <SliderInfo info={data} />
            </StyledLink>
          </SliderItem>
        ))}
      </SliderBox>
      <SliderDots
        curIndex={slideIndex}
        contentsDatas={contentsDatas}
        moveSlider={moveSlider}
      />
      <SliderButton handleBtn={prevSlide} left="calc((100% - 850px)/2);">
        <FiChevronLeft color="#000000" size="4rem" />
      </SliderButton>
      <SliderButton handleBtn={nextSlide} right="calc((100% - 850px)/2);">
        <FiChevronRight color="#000000" size="4rem" />
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

const StyledLink = styled(Link)`
  color: black;
`;
const SliderContainer = styled.div`
  width: 42.5rem;
  overflow: hidden;
  margin: auto;
  margin-top: 2.5rem;
  @media screen and (max-width: 768px) {
    width: 24rem;
    margin-top: 20px;
  }
`;

const SliderBox = styled.div`
  width: 212.5rem;
  height: 27.4rem;
  @media screen and (max-width: 768px) {
    height: 21.4rem;
  }
`;

const SliderItem = styled.div`
  display: table;
  float: left;
  padding: 0 1rem;
`;

const Img = styled.img`
  width: 40.5rem;
  height: 20rem;
  border-radius: 14px;
  @media screen and (max-width: 768px) {
    width: 22rem;
    height: 12rem;
  }
`;
export default Slider;
