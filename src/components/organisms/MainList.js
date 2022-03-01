import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchDataBySectorId } from '../../store/data/dataAsyncThunk';
import CardList from '../molecules/CardList';
import Title from '../molecules/Title';
import MoreButton from '../atoms/MoreButton';

function MainContent() {
  const { currentIdx } = useSelector(({ tab }) => tab);
  const { contents } = useSelector(({ data }) => data);
  const { sector } = useSelector(({ data }) => data);

  const sectorFilter = sector.filter((el) => el.id === currentIdx);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataBySectorId(currentIdx));
  }, []);

  if (!sectorFilter.length && !contents.length) {
    return <h1>로딩중</h1>;
  }

  return (
    <>
      <Title text={sectorFilter[0].title} tab={sectorFilter[0].type} />
      <StyledCardList className="card-list">
        <CardList cardData={contents} />
      </StyledCardList>
      <MoreButton />
    </>
  );
}

export default MainContent;

const StyledCardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: auto;
  width: 100%;
  gap: 20px;
  margin-top: 50px;
  img {
    width: 100%;
  }
  .card-list {
    margin-top: 30px;
  }
  .card {
    overflow: hidden;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
  }
  .card-main {
    padding: 20px;
    p {
      height: 50px;
      font-size: 1.1rem;
      font-weight: bold;
    }
  }
  .card-footer {
    margin-top: 20px;
  }
`;
