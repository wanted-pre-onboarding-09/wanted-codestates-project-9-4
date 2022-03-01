import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Likes from './Likes';
import Share from './Share';

function SliderInfo({ info }) {
  return (
    <InfoBox>
      <LeftBox>
        <Likes id={info.id} likeCnt={info.like_cnt} />
        <Share url={info.link} />
      </LeftBox>
    </InfoBox>
  );
}

export default SliderInfo;

const InfoBox = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 42.5rem;
  height: 6.25rem;
  background-color: #ffffff;
  border-radius: 14px;
  padding: 20px;
  @media screen and (max-width: 768px) {
    width: 24rem;
    height: 4rem;
  }
`;

const LeftBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 10rem;
`;

SliderInfo.propTypes = {
  info: PropTypes.shape({
    body: null || PropTypes.string,
    id: PropTypes.number,
    image: PropTypes.string,
    like_cnt: PropTypes.number,
    like_top: PropTypes.number,
    link: PropTypes.string,
    sector_id: PropTypes.number,
    title: PropTypes.string,
    upload_date: PropTypes.string,
  }).isRequired,
};
