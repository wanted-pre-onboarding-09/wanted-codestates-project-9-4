import React from 'react';
import PropTypes, { number, string } from 'prop-types';
import CardImg from '../atoms/CardImg';
import CardTitle from '../atoms/CardTitle';
import CardDate from '../atoms/CardDate';

function CardList({ cardData }) {
  return (
    <>
      {cardData.map((card) => (
        <li key={card.id} className="card">
          <CardImg itemSrc={card.image} />
          <div className="card-main">
            <CardTitle itemTitle={card.title} />
            <div className="card-footer">
              <CardDate itemDate={card.upload_date} />
            </div>
          </div>
        </li>
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
