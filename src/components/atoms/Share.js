import React from 'react';
import styled from 'styled-components';
import { FiShare } from 'react-icons/fi';
import PropTypes from 'prop-types';

const ShareContainer = styled.div`
  width: 100px;
  height: 100px;
  margin: 100px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

// eslint-disable-next-line react/prop-types
function Share({ url }) {
  const ShareHandler = () => {
    window.open(url, '_blank');
  };

  return (
    <ShareContainer>
      <FiShare color="#848484" size="2rem" pull="left" onClick={ShareHandler} />
    </ShareContainer>
  );
}

Share.propsTypes = {
  url: PropTypes.string,
};

export default Share;
