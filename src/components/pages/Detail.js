import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Main from '../atoms/Main';
import { fetchDataByContentId } from '../../store/data/dataAsyncThunk';
import Loading from '../atoms/Loading';
import DetailContent from '../organisms/DetailContent';

function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, contents } = useSelector(({ data }) => ({
    loading: data.loading,
    contents: data.contents,
  }));
  useEffect(() => {
    dispatch(fetchDataByContentId(id));
  }, []);

  return (
    <DetailWrap>
      <Main>
        {loading ? <Loading /> : <DetailContent contents={contents} />}
      </Main>
    </DetailWrap>
  );
}
export default Detail;

const DetailWrap = styled.div`
  min-height: 100vh;
  height: auto;
  display: flex;
  background: #f7f7fb;
  justify-content: center;
  padding: 60px 5rem;

  main {
    .title-wrap {
      margin: 40px 0;
      background-color: gray;
      padding: 20px 10px;
      text-align: center;
      font-size: 1.4rem;
      font-weight: bold;
    }
    .detail-header {
      display: flex;
      font-size: 1.8rem;
      font-weight: bold;
      margin-bottom: 40px;
      svg {
        margin-right: 30px;
        cursor: pointer;
      }
    }
    .detail-content {
      margin-top: 40px;
      line-height: 25px;
      padding: 0 10px;
    }
    .detail-img {
      img {
        width: 100%;
      }
    }
    .detail-move {
      text-align: center;
      margin-top: 50px;
      // background-color: ${({ theme }) => theme.colors.lightBlue};
      padding: 10px 0;
      button {
        color: #fff;
        font-size: 1.3rem;
        cursor: pointer;
        padding: 20px 40px;
        background-color: ${({ theme }) => theme.colors.lightBlue};
        border-radius: 25px;
        border: none;
      }
      .detail-youtube {
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 56.25%;
        iframe {
          position: absolute;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;
