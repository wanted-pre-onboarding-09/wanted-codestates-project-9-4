import React, { useState } from 'react';
import styled from 'styled-components';
import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import PropTypes from 'prop-types';

const LikesContainer = styled.div`
  width: 200px;
  height: 100px;
  margin: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

const LikeCount = styled.div`
  font-size: 2rem;
  margin-left: 1rem;
  /* border: 1px solid black; */
  color: #848484;
`;

// eslint-disable-next-line react/prop-types
function Likes({ id, likeCnt }) {
  if (localStorage.getItem(id) === undefined) {
    localStorage.setItem(id, likeCnt);
  }

  const [isLikes, setIsLikes] = useState(false);
  const [likesNumber, setLikesNumber] = useState(
    Number(localStorage.getItem(id)),
  );

  const LikeHandler = () => {
    if (!isLikes) {
      setIsLikes(!isLikes);
      setLikesNumber(likesNumber + 1);
      localStorage.setItem(id, likesNumber + 1);
    } else {
      setIsLikes(!isLikes);
      setLikesNumber(likesNumber - 1);
      localStorage.setItem(id, likesNumber - 1);
    }
  };

  return (
    <LikesContainer onClick={LikeHandler}>
      {isLikes ? (
        <FaHeart color="red" background="red" size="2rem" pull="left" />
      ) : (
        <FiHeart color="#848484" size="2rem" pull="left" />
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
