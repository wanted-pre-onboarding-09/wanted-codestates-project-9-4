import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  // fetchDataByContentId,
  fetchDataBySectorId,
} from '../store/data/dataAsyncThunk';

function ReduxTest() {
  const { sector } = useSelector(({ data }) => data);
  const dispatch = useDispatch();

  console.log(sector);

  useEffect(() => {
    dispatch(fetchDataBySectorId(1));
    // dispatch(fetchDataByContentId(1));
  }, []);

  return (
    <div>
      <h2>메인</h2>
    </div>
  );
}

export default ReduxTest;
