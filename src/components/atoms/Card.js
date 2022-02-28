import React from 'react';
import PropTypes, { number, string } from 'prop-types';

function Card({ item }) {
  return (
    <li>
      <img src={item.image} alt="coin" />
    </li>
  );
}

export default Card;
Card.propTypes = {
  item: PropTypes.shape({
    body: null || string,
    id: number,
    image: string,
    like_cnt: number,
    like_top: number,
    link: string,
    sector_id: number,
    title: string,
    upload_date: string,
  }).isRequired,
};

// const StyledImg = styled.div`
//   width: 100%
// `;
