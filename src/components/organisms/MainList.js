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
  margin: 50px 0 30px;
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
  }
  .card-main {
    padding: 20px;
    p {
      height: 50px;
      font-size: 1.1rem;
      font-weight: bold;
    }
  }
  .card-footer {
    margin-top: 20px;
  }
  button {
    margin-top: 30px;
  }
`;
