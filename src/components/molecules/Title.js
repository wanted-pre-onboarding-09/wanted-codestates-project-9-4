import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Title({ text, tab }) {
  return (
    <StyledTitle>
      <h1>{text}</h1>
      <div>{tab}</div>
    </StyledTitle>
  );
}

export default Title;
Title.propTypes = {
  text: PropTypes.string,
  tab: PropTypes.string,
};
Title.defaultProps = {
  text: '',
  tab: '',
};

const StyledTitle = styled.div`
  padding-left: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 1.5rem;
  }
  div {
    font-size: 1.5rem;
    color: #fff;
    background-color: #8bdb81;
    padding: 5px 25px;
    border-radius: 5px;
    margin-left: 15px;
  }
`;
