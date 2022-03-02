import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Title({ text, tab }) {
  function getColor(tab) {
    switch (tab) {
      case 'News':
        return '#6691ff';
      case 'Youtube':
        return '#c4302b';
      case 'Report':
        return '#9695D7';
      case 'NEW':
        return '#8bdb81';
      default:
        throw new Error(`unknown :${tab}`);
    }
  }

  return (
    <StyledTitle bgColor={getColor(tab)}>
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
  tab: 'NEW',
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
    padding: 5px 25px;
    border-radius: 5px;
    margin-left: 15px;
    background-color: ${(props) => props.bgColor};
  }
`;
