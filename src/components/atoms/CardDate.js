import React from 'react';
import PropTypes from 'prop-types';

function CardDate({ itemDate }) {
  return <span>{itemDate}</span>;
}

export default CardDate;
CardDate.propTypes = {
  itemDate: PropTypes.string.isRequired,
};
