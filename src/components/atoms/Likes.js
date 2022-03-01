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
    // localStorage에 값이 없는 경우에만 설정
    localStorage.setItem(id, likeCnt);
  }

  /* localStorage에 값이 있으면 기존 localStorage의 값을 가져온다 */
  const [isLikes, setIsLikes] = useState(
    localStorage.getItem(id) !== undefined,
  );
  const [likesNumber, setLikesNumber] = useState(
    Number(localStorage.getItem(id)),
  );

  const LikeHandler = () => {
    if (!isLikes) {
      /* 좋아요를 누르지 않은 경우 */
      setIsLikes(!isLikes);
      setLikesNumber(likesNumber + 1);
      localStorage.setItem(id, likesNumber + 1);
    } else {
      /* 좋아요를 누른 경우 */
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
