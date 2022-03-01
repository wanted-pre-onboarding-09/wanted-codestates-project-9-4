import React from 'react';
import PropTypes from 'prop-types';

function CardTitle({ itemTitle }) {
  return <p>{itemTitle}</p>;
}

export default CardTitle;
CardTitle.propTypes = {
  itemTitle: PropTypes.string.isRequired,
};
