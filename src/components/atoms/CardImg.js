import React from 'react';
import PropTypes from 'prop-types';

function CardImg({ itemSrc }) {
  return <img src={itemSrc} alt="coin" />;
}

export default CardImg;
CardImg.propTypes = {
  itemSrc: PropTypes.string.isRequired,
};
