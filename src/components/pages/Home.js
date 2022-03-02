import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Main from '../atoms/Main';
import Container from '../atoms/Container';
import MainList from '../organisms/MainList';
import MainSlider from '../organisms/MainSlider';
import Subscribe from '../molecules/Subscribe';
import { fetchDataBySectorId } from '../../store/data/dataAsyncThunk';

import Loading from '../atoms/Loading';

const HomeWrap = styled.div`
  min-height: 100vh;
  height: auto;
  display: flex;
  background: #f7f7fb;
  justify-content: center;
  padding: 60px 5rem;
`;

function Home() {
  const { currentIdx } = useSelector(({ tab }) => tab);
  const { loading, sector, contents } = useSelector(({ data }) => ({
    loading: data.loading,
    sector: data.sector,
    contents: data.contents,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataBySectorId(currentIdx));
  }, [currentIdx]);

  return (
    <HomeWrap>
      <Main>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Container>
              <MainSlider contents={contents} />
            </Container>
            <Subscribe />
            <Container>
              <MainList
                sector={sector}
                contents={contents}
                currentIdx={+currentIdx}
              />
            </Container>
          </>
        )}
      </Main>
    </HomeWrap>
  );
}

export default Home;
