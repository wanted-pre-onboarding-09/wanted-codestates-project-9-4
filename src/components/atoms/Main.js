import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Main({ children }) {
  return <StyledWrapper>{children}</StyledWrapper>;
}

Main.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Main;

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  background: #f7f7fb;
`;
