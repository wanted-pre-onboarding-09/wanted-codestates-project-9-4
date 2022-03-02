import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CardList from '../molecules/CardList';
import Title from '../molecules/Title';
import MoreButton from '../atoms/MoreButton';

function MainList({ sector, contents, currentIdx }) {
  // function MainContent({ sector, contents, currentIdx }) {

  const sectorFilter = sector.filter((el) => el.id === currentIdx);
  const [range, setRange] = useState(true);
  const contentsRange = contents.slice(0, range ? 6 : contents.length);

  return (
    <>
      <Title text={sectorFilter[0]?.title} tab={sectorFilter[0]?.type} />
      <StyledCardList className="card-list">
        <CardList cardData={contentsRange} />
      </StyledCardList>
      <MoreButton range={range} setRange={setRange} />
    </>
  );
}

MainList.propTypes = {
  sector: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      script_en: PropTypes.string,
      sector_en: PropTypes.string,
      sector_kr: PropTypes.string,
      sort: PropTypes.number,
      title: PropTypes.string,
      type: PropTypes.string,
      url: PropTypes.string,
    }),
  ).isRequired,
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
  currentIdx: PropTypes.number.isRequired,
};

export default MainList;
// export default MainContent;

const StyledCardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: auto;
  width: 100%;
  gap: 20px;
  margin: 40px 0 30px;
  img {
    width: 100%;
  }
  .card-list {
    margin: 30px 0;
  }
  .card {
    overflow: hidden;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    @media screen and (max-width: 768px) {
      border: none;
    }
  }
  .card-main {
    padding: 1.25rem;
    @media screen and (max-width: 768px) {
      padding: 0.5rem;
    }
    p {
      height: 3.12rem;
      font-size: 1.1rem;
      font-weight: bold;
      @media screen and (max-width: 768px) {
        display: none;
      }
    }
  }
  .card-footer {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
      margin-top: 0px;
    }
  }
  button {
    margin-top: 30px;
  }
  span {
  }
  .like-share {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  @media screen and (max-width: 768px) {
    margin: 20px 0 30px;
  }
`;
