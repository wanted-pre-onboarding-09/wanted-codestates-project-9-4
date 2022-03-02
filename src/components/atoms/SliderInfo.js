import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Likes from './Likes';
import Share from './Share';

function SliderInfo({ info }) {
  return (
    <InfoBox>
      <InfoTitle>{info.title}</InfoTitle>
      <RightBox>
        <Likes id={info.id} likeCnt={info.like_cnt} />
        <Share url={info.link} />
      </RightBox>
    </InfoBox>
  );
}

export default SliderInfo;
const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 42.5rem;
  height: 6.25rem;
  background-color: #ffffff;
  border-radius: 14px;
  padding: 20px;
  @media screen and (max-width: 768px) {
    width: 24rem;
    height: 5.8rem;
  }
`;

const InfoTitle = styled.p`
  font-size: 1rem;
  font-weight: 500;
`;

const RightBox = styled.div`
  display: flex;
  justify-content: flex-end;
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
