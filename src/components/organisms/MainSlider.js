import React from 'react';
import PropTypes from 'prop-types';
import Slider from '../molecules/Slider';
import Title from '../molecules/Title';

function MainSlider({ contents }) {
  const contentsDatas = contents.filter((el) => el.like_top === 1);
  return (
    <>
      <Title text="새로 올라왔어요" tab="NEW" />
      <Slider contentsDatas={contentsDatas} />
    </>
  );
}

MainSlider.propTypes = {
  contents: PropTypes.arrayOf(
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

export default MainSlider;
