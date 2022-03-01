/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { MdArrowBackIosNew } from 'react-icons/md';
import { useHistory } from 'react-router-dom';

const DetailPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /* border: 1px solid black; */
`;

const DetailPageHeader = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  /* border: 1px solid red; */

  > .prevIcon {
    position: relative;
    left: -620px;
    font-size: 30px;
    cursor: pointer;

    @media screen and (max-width: 360px) {
      left: -100px;
    }
  }

  > .sectorName {
    font-size: 25px;
  }
`;

const DetailPageTitle = styled.div`
  width: 100%;
  height: 10%;
  border-top: 1px solid black;
`;

const DetailPageBody = styled.div`
  width: 50%;
  height: 30%;
  border: 1px solid black;
`;

function DetailPage({ content }) {
  const history = useHistory();

  const MoveToPrevPage = () => {
    history.push('/');
  };

  return (
    <DetailPageContainer>
      <DetailPageHeader>
        <MdArrowBackIosNew className="prevIcon" onClick={MoveToPrevPage} />
        <div className="sectorName">{content.sector_kr}</div>
      </DetailPageHeader>
      <DetailPageTitle />
      <DetailPageBody />
    </DetailPageContainer>
  );
}

export default DetailPage;
