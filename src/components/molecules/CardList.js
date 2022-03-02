import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CardImg from '../atoms/CardImg';
import CardTitle from '../atoms/CardTitle';
import CardDate from '../atoms/CardDate';
import Likes from '../atoms/Likes';
import Share from '../atoms/Share';

function CardList({ cardData }) {
  return (
    <>
      {cardData.map((card) => (
        <li key={card.id} className="card">
          <Link to={`/detail/${card.id}`}>
            <CardImg itemSrc={card.image} />
          </Link>
          <div className="card-main">
            <CardTitle itemTitle={card.title} />
            <div className="card-footer">
              <CardDate itemDate={card.upload_date} />
              <div className="like-share">
                <Likes id={card.id} likeCnt={card.like_cnt} />
                <Share url={card.link} sectorId={card.sector_id} />
              </div>
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
