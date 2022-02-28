import React, { useState } from 'react';
import styled from 'styled-components';
import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';

const LikesContainer = styled.div`
  width: 100px;
  height: 100px;
  margin: 100px;
`;

function Likes() {
  const [isLikes, setIsLikes] = useState(false);
  const LikeHandler = () => {
    setIsLikes(!isLikes);
  };

  return (
    <LikesContainer onClick={LikeHandler}>
      {isLikes ? (
        <FaHeart color="red" background="red" size="lg" pull="left" />
      ) : (
        <FiHeart color="#848484" size="lg" pull="left" />
      )}
    </LikesContainer>
  );
}

export default Likes;
