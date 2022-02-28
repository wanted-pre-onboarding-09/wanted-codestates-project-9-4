import React from 'react';
import PropTypes, { number, string } from 'prop-types';
import Card from '../atoms/Card';

function CardList({ cardData }) {
  return (
    <>
      {cardData.map((card) => (
        <Card item={card} key={card.id} />
      ))}
    </>
  );
}

export default CardList;
CardList.propTypes = {
  cardData: PropTypes.arrayOf(
    PropTypes.shape({
      body: null || string,
      id: number,
      image: string,
      like_cnt: number,
      like_top: number,
      link: string,
      sector_id: number,
      title: string,
      upload_date: string,
    }),
  ).isRequired,
};
