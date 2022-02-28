import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchDataBySectorId } from '../../store/data/dataAsyncThunk';
import CardList from '../molecules/CardList';
import Title from '../molecules/Title';
import Container from '../atoms/Container';
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
    <Container>
      <>
        <Title text={sectorFilter[0].title} tab={sectorFilter[0].type} />
        <StyledCardList className="card-list">
          <CardList cardData={contents} />
        </StyledCardList>
        <MoreButton />
      </>
    </Container>
  );
}

export default MainContent;

const StyledCardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: auto;
  width: 100%;
  gap: 10px;
  margin-top: 30px;
  img {
    width: 100%;
    border-radius: 10px;
  }
  .card-list {
    margin-top: 30px;
  }
`;
