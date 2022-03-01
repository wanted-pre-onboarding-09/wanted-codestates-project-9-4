import React from 'react';
import PropTypes from 'prop-types';

function CardDate({ itemDate }) {
  return <span width="">{itemDate}</span>;
}

export default CardDate;
CardDate.propTypes = {
  itemDate: PropTypes.string.isRequired,
};
