import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSliderButton = styled.button`
  width: 60px;
  height: 60px;
  border: none;
  background-color: transparent;
`;

function SliderButton({ handleBtn, children }) {
  return (
    <StyledSliderButton type="button" onClick={handleBtn}>
      {children}
    </StyledSliderButton>
  );
}

export default SliderButton;

SliderButton.propTypes = {
  handleBtn: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
