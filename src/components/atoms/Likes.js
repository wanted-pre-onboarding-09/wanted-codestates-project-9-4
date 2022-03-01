import React, { useState } from 'react';
import styled from 'styled-components';
import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import PropTypes from 'prop-types';

const LikesContainer = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const LikeCount = styled.div`
  font-size: 1rem;
  margin-left: 0.3rem;
  color: #848484;
`;

// eslint-disable-next-line react/prop-types
function Likes({ id, likeCnt }) {
  let newLikeCnt = likeCnt;
  let isLikesBoolean = false;

  if (localStorage.getItem(id)) {
    const moreLike = JSON.parse(localStorage.getItem(id))[0];
    newLikeCnt += moreLike;
    // eslint-disable-next-line prefer-destructuring
    isLikesBoolean = JSON.parse(localStorage.getItem(id))[1];
  }

  const [isLikes, setIsLikes] = useState(isLikesBoolean);
  const [likesNumber, setLikesNumber] = useState(newLikeCnt);

  const LikeHandler = () => {
    if (!isLikes) {
      /* 좋아요를 누르지 않은 경우 */
      setIsLikes(!isLikes);
      setLikesNumber(likesNumber + 1);
      if (localStorage.getItem(id)) {
        const moreLike = JSON.parse(localStorage.getItem(id))[0];
        localStorage.setItem(id, JSON.stringify([moreLike + 1, true]));
      } else {
        localStorage.setItem(id, JSON.stringify([1, true]));
      }
    } else {
      /* 좋아요를 누른 경우 */
      setIsLikes(!isLikes);
      setLikesNumber(likesNumber - 1);
      const moreLike = JSON.parse(localStorage.getItem(id))[0];
      localStorage.setItem(id, JSON.stringify([moreLike - 1, false]));
    }
  };

  return (
    <LikesContainer onClick={LikeHandler}>
      {isLikes ? (
        <FaHeart color="red" background="red" size="1rem" pull="left" />
      ) : (
        <FiHeart color="#848484" size="1rem" pull="left" />
      )}
      <LikeCount>{likesNumber}</LikeCount>
    </LikesContainer>
  );
}

Likes.propsTypes = {
  id: PropTypes.number,
  likeCnt: PropTypes.number,
  likesNumber: PropTypes.number,
};

export default Likes;
