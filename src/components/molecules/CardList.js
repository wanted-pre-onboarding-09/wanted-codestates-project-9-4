import React from 'react';
import PropTypes from 'prop-types';
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
