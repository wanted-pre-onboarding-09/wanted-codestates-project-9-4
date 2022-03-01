import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';

function BackArrow() {
  const navigate = useNavigate();
  return (
    <BsChevronLeft
      onClick={() => {
        navigate(-1);
      }}
      color="#979797"
      size="2.5rem"
    />
  );
}

export default BackArrow;
