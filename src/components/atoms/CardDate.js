import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function CardDate({ itemDate }) {
  return <DateText>{itemDate}</DateText>;
}

export default CardDate;

CardDate.propTypes = {
  itemDate: PropTypes.string.isRequired,
};

const DateText = styled.span`
  color: #979797;
`;
