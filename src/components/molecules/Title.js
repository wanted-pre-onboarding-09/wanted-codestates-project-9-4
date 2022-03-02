import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../../styles/theme';

function Title({ text, tab }) {
  function getColor(tab) {
    switch (tab) {
      case 'News':
        return theme.colors.lightBlue;
      case 'Youtube':
        return theme.colors.red;
      case 'Report':
        return theme.colors.puple;
      case 'NEW':
        return theme.colors.green;
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
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 1.5rem;
  }
  div {
    font-size: 1rem;
    color: #fff;
    padding: 0.4rem 1rem;
    border-radius: 5px;
    margin-left: 1rem;
    background-color: ${(props) => props.bgColor};
  }
  @media screen and (max-width: 768px) {
    justify-content: flex-start;
  }
`;
