import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchDataBySectorId } from '../../store/data/dataAsyncThunk';

function Container() {
  const { sector, contents } = useSelector(({ data }) => ({
    sector: data.sector,
    contents: data.contents,
  }));
  const dispatch = useDispatch();

  console.log(sector, contents);

  useEffect(() => {
    dispatch(fetchDataBySectorId(1));
  }, []);

  if (!sector && !contents) {
    return <h1>로딩중</h1>;
  }

  return (
    <StyledContainer>
      <StyledMoreButton>더보기</StyledMoreButton>
    </StyledContainer>
  );
}

export default Container;

const StyledContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 50px;
  border-radius: 20px;
  margin: 200px 10px;
`;

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
