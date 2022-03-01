import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

Container.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Container;

const StyledContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 40px;
  border-radius: 20px;
`;
