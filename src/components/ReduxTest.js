import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchDataByContentId,
  // fetchDataBySectorId,
} from '../store/data/dataAsyncThunk';

function ReduxTest() {
  const { data } = useSelector(({ data }) => data);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchDataBySectorId(1));
    dispatch(fetchDataByContentId(59));
  }, []);

  return <div>{data}</div>;
}

export default ReduxTest;
