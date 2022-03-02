import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FiShare } from 'react-icons/fi';
import PropTypes from 'prop-types';

const changeColor = keyframes`
  0% {
    color: #848484;
  }
  50% {
    color: #e6e6e6;
  }
  100% {
    color: #848484;
  }
`;

const ShareContainer = styled.span`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 15px;

  .share-img {
    height: 100%;
    color: #848484;

    &.share-clicked {
      animation: ${changeColor} 4s none;
    }
  }

  .share-title {
    color: #848484;
    font-size: 0.8rem;
    margin-left: 0.2rem;
    height: 100%;
    padding-top: 2px;

    &.share-clicked {
      animation: ${changeColor} 4s none;
    }
  }
`;

// eslint-disable-next-line react/prop-types
function Share({ url, sectorId }) {
  let cleanUp = false;
  const [clicked, setClicked] = useState(false);
  const ShareHandler = async () => {
    setClicked(true);
    setTimeout(() => {
      if (sectorId !== 2) {
        window.open(url, '_blank'); /* 2초 뒤에 새창 띄위기 */
      } else {
        window.open(
          `https://youtu.be/${url}`,
          '_blank',
        ); /* 2초 뒤에 새창 띄위기 */
      }
    }, 2000);

    cleanUp = true;
    return cleanUp;
  };

  if (cleanUp) {
    setClicked(false); /*  cleanUp을 통해 setClicked을 원복시킨다. */
  }

  return (
    <ShareContainer onClick={ShareHandler}>
      <FiShare
        className={`share-img ${clicked ? 'share-clicked' : ''}`}
        size="1rem"
        pull="left"
      />
      <span className={`share-title ${clicked ? 'share-clicked' : ''}`}>
        공유하기
      </span>
    </ShareContainer>
  );
}

Share.propsTypes = {
  url: PropTypes.string.isRequired,
};

export default Share;
