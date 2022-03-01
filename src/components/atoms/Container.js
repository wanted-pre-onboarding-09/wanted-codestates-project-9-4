import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fetchDataBySectorId } from '../../store/data/dataAsyncThunk';

function Container({ children }) {
  const { sector, contents } = useSelector(({ data }) => ({
    sector: data.sector,
    contents: data.contents,
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataBySectorId(1));
  }, []);

  if (!sector && !contents) {
    return <h1>로딩중</h1>;
  }

  return <StyledContainer>{children}</StyledContainer>;
}

Container.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Container;

const StyledContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 50px;
  border-radius: 20px;
`;
