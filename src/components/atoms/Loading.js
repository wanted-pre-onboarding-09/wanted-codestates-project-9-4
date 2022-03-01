import React from 'react';
import styled from 'styled-components';

function Loading() {
  return (
    <StyledWrapper>
      <div className="outer">
        <div className="inner" />
      </div>
    </StyledWrapper>
  );
}

export default Loading;

const StyledWrapper = styled.div`

  .outer {
    height: 60px;
    width: 60px;
    margin: auto;
    position: relative;
    top: 20px;
    border-radius: 50%;
    background-image: linear-gradient(150deg, transparent 50%, #154e7d 50%),
      linear-gradient(90deg, #154e7d 50%, #fff 50%);
    animation: rotation 1200ms infinite linear;
    transform-origin: 50% 50%;
    animation-timing-function: ease;
  }

  .inner {
    background: #44b9fc;
    height: 48px;
    width: 48px;
    margin: auto;
    position: relative;
    top: 6px;
    border-radius: 50%;
  }

  @keyframes rotation {
from {
  transform: rotate(270deg);
}
to{
  transform: rotate(630deg);
  }
`;
