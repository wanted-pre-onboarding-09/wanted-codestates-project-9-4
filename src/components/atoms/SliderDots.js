import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const DotList = styled.ul`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 40px;
`;

const DotItem = styled.li`
  margin: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DotBtn = styled.button`
  width: 10px;
  height: 10px;
  padding: 5px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? '#5e72e4' : '#BCD4FF')};
  border: none;
`;

// `${({ theme }) => theme.colors.lightGray}`
// background-color: ${({ theme }) => theme.colors.lightBlue};

function SliderDots({ curIndex, contentsDatas }) {
  return (
    <DotList>
      {contentsDatas.map((data, index) => (
        <DotItem key={data.id}>
          <DotBtn active={curIndex === index + 1} />
        </DotItem>
      ))}
    </DotList>
  );
}

export default SliderDots;

SliderDots.propTypes = {
  contentsDatas: PropTypes.arrayOf(
    PropTypes.shape({
      body: null || PropTypes.string,
      id: PropTypes.number,
      image: PropTypes.string,
      like_cnt: PropTypes.number,
      like_top: PropTypes.number,
      link: PropTypes.string,
      sector_id: PropTypes.number,
      title: PropTypes.string,
      upload_date: PropTypes.string,
    }),
  ).isRequired,
  curIndex: PropTypes.number.isRequired,
};
