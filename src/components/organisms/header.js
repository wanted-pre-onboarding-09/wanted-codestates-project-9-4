import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LogoIcon from '../../assets/logo.svg';
import { changeSector } from '../../store/tab/tabIndexSlice';
import { fetchDataBySectorId } from '../../store/data/dataAsyncThunk';

const HeaderBox = styled.div`
  width: 100%;
  height: 3.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  background: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 768px) {
    justify-content: space-around;
  }
`;

const Icon = styled.img`
  width: 10rem;
  height: 100%;
  @media screen and (max-width: 768px) {
    padding: 0 0.5rem;
  }
`;

const StyleList = styled.ul`
  padding: 0;
  display: flex;
  justify-content: space-around;
  list-style: none;
  position: relative;
`;

const StyledLink = styled(Link)`
  &:link {
    //아직 방문하지 않은
    color: black;
    text-decoration: none;
  }
  &:visited {
    //사용자가 방문한적이 있는
    color: black;
    text-decoration: none;
  }
  &:hover {
    //마우스를 링크에 올려두었을 때
    color: black;
  }
  &:active {
    //클릭 후 뗄 떼까지
    color: black;
  }
`;

const ButtonBox = styled.li`
  padding: 1rem;
  width: 8rem;
  height: 3.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  box-sizing: border-box;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    width: 6rem;
  }
`;

const Slider = styled.div`
  left: 0;
  bottom: 0;
  width: 8rem;
  border-bottom: 4px solid #5e72e4;
  position: absolute;
  transition: 0.3s;
  @media screen and (max-width: 768px) {
    width: 6rem;
  }
`;

// eslint-disable-next-line react/prop-types
function Header() {
  const slider = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    document.querySelectorAll('.list').forEach((item) => {
      item.style.fontWeight = 'normal';
      item.style.color = '#979797';
    });
    document.querySelectorAll('.list')[0].style.fontWeight = 'bold';
    document.querySelectorAll('.list')[0].style.color = '#000000';
  }, []);
  const tapChange = (event) => {
    const listArray = document.querySelectorAll('.list');
    listArray.forEach((item) => {
      item.style.fontWeight = 'normal';
      item.style.color = '#979797';
    });
    event.target.style.fontWeight = 'bold';
    event.target.style.color = '#000000';
    if (document.body.clientWidth > 768) {
      slider.current.style.transform = `translateX(${event.target.id * 8}rem)`;
    } else {
      slider.current.style.transform = `translateX(${event.target.id * 6}rem)`;
    }
    dispatch(changeSector(event.target.dataset.sectorId));
    dispatch(fetchDataBySectorId(event.target.dataset.sectorId));
  };

  return (
    <HeaderBox>
      <Link to="/">
        <Icon alt="" src={LogoIcon} />
      </Link>
      <StyleList>
        <StyledLink to="/">
          <ButtonBox
            className="list"
            id="0"
            data-sector-id={1}
            onClick={tapChange}
          >
            알쓸B잡
          </ButtonBox>
        </StyledLink>
        <StyledLink to="/">
          <ButtonBox
            className="list"
            id="1"
            data-sector-id={2}
            onClick={tapChange}
          >
            유튜브
          </ButtonBox>
        </StyledLink>
        <StyledLink to="/">
          <ButtonBox
            className="list"
            id="2"
            data-sector-id={3}
            onClick={tapChange}
          >
            인사이트
          </ButtonBox>
        </StyledLink>
        <Slider ref={slider}>{}</Slider>
      </StyleList>
    </HeaderBox>
  );
}
export default Header;
