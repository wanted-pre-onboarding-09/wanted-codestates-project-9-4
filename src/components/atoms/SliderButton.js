import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const StyledSliderButton = styled.button`
  width: 60px;
  height: 60px;
  border: none;
  background-color: transparent;
  position: absolute;
  top: 400px;
  left: ${(props) => props.left && props.left};
  right: ${(props) => props.right && props.right};
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

function SliderButton({ handleBtn, children, left, right }) {
  return (
    <StyledSliderButton
      type="button"
      onClick={handleBtn}
      left={left}
      right={right}
    >
      {children}
    </StyledSliderButton>
  );
}

export default SliderButton;
SliderButton.defaultProps = {
  left: null,
  right: null,
};

SliderButton.propTypes = {
  handleBtn: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  left: PropTypes.string,
  right: PropTypes.string,
};
