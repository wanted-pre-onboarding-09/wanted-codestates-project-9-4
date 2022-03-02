import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function CardImg({ itemSrc }) {
  return <Img src={itemSrc} alt="coin" />;
}

export default CardImg;
CardImg.propTypes = {
  itemSrc: PropTypes.string.isRequired,
};

const Img = styled.img`
  @media screen and (max-width: 768px) {
    border-radius: 12px;
  }
`;
