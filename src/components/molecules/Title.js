import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Title({ text, tab }) {
  return (
    <StyledTitle tabName={tab}>
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
    background-color: ${(props) => {
      switch (props.tabName) {
        case 'NEW':
          return props.theme.colors.lightBlue;
        case 'Youtube':
          return props.theme.colors.red;
        case 'Report':
          return props.theme.colors.puple;
        case 'News':
          return props.theme.colors.green;
        default:
          throw new Error(`unknown :${props.tabName}`);
      }
    }};
  }

  @media screen and (max-width: 768px) {
    justify-content: flex-start;
  }
`;
