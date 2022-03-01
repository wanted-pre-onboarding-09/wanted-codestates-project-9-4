import React from 'react';
import PropTypes from 'prop-types';

function ContentMove({ move }) {
  // <button onclick='window.open('address')'>전체 리포트 열기</button>;
  return (
    <button type="button" onClick={() => window.open(`${move}`)}>
      전체 리포트 열기
    </button>
  );
}

export default ContentMove;
ContentMove.propTypes = {
  move: PropTypes.string.isRequired,
};
