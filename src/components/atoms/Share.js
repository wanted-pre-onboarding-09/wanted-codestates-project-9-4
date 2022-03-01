import React from 'react';
import styled from 'styled-components';
import { FiShare } from 'react-icons/fi';
import PropTypes from 'prop-types';

const ShareContainer = styled.span`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
`;

// eslint-disable-next-line react/prop-types
function Share({ url }) {
  const ShareHandler = () => {
    window.open(url, '_blank');
  };

  return (
    <ShareContainer onClick={ShareHandler}>
      <FiShare color="#848484" size="1rem" pull="left" />
      <span className="share-title">공유하기</span>
    </ShareContainer>
  );
}

Share.propsTypes = {
  url: PropTypes.string.isRequired,
};

export default Share;
