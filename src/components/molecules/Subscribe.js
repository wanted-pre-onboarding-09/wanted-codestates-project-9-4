import React from 'react';
import styled from 'styled-components';

function Subscribe() {
  return (
    <SubScribeContainer>
      <SubscribeDescription>
        <p className="description__desc">매주 새로운 코인 지식을 드려요</p>
        <h3 className="description__title">샌드뱅크 오리지널</h3>
      </SubscribeDescription>
      <SubscribButton
        type="button"
        onClick={() => window.open('https://sandbank.io')}
      >
        구독하기
      </SubscribButton>
    </SubScribeContainer>
  );
}

export default Subscribe;

const SubScribeContainer = styled.section`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  @media screen and (max-width: 768px) {
    box-shadow: 0 0 0px rgba(0, 0, 0, 0);
  }
`;

const SubscribeDescription = styled.div`
  display: flex;
  flex-direction: column;

  .description__desc {
    margin: 0;
    color: ${({ theme }) => theme.colors.darkGray};
  }

  .description__title {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.lightBlue};
    margin: 0;
  }
`;

const SubscribButton = styled.button`
  width: 100px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.lightBlue};
  border: none;
  border-radius: 20px;
  padding: 0.8rem 0;
  cursor: pointer;
`;
