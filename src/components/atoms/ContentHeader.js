import React from 'react';
import PropTypes from 'prop-types';

function ContentHeader({ header }) {
  const parsing = ['', '블록체인 NOW', '알쓸B잡', '어떻게 투자할까'];
  return <h2>{parsing[header]}</h2>;
}

export default ContentHeader;
ContentHeader.propTypes = {
  header: PropTypes.number.isRequired,
};
