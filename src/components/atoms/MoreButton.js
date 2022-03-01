import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function MoreButton({ range, setRange }) {
  const onClick = () => {
    setRange(!range);
  };
  return (
    <StyledMoreButton onClick={onClick}>
      {range ? '더보기' : '접기'}
    </StyledMoreButton>
  );
}

MoreButton.propTypes = {
  setRange: PropTypes.func,
  range: PropTypes.bool,
};
MoreButton.defaultProps = {
  setRange: () => {},
  range: true,
};
export default MoreButton;
const StyledMoreButton = styled.button`
  width: 100%;
  font-size: 1.5rem;
  display: block;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background: rgba(91, 175, 236, 0.4);
  color: #669cfe;
  font-weight: bold;
  cursor: pointer;
`;
