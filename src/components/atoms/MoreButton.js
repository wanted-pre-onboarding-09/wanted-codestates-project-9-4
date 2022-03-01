import React from 'react';
import styled from 'styled-components';

function MoreButton() {
  return <StyledMoreButton>더보기</StyledMoreButton>;
}
export default MoreButton;
const StyledMoreButton = styled.button`
  width: 80%;
  font-size: 1.5rem;
  display: block;
  margin: 0 auto;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background: rgba(91, 175, 236, 0.4);
  color: #669cfe;
  font-weight: bold;
  cursor: pointer;
`;
