import React, { useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderBox = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Logo = styled.a`
  font-weight: bold;
  padding: 1rem;
  text-decoration: none;
  font-size: 1.5rem;
`;

const StyleList = styled.div`
  display: flex;
  justify-content: space-around;
  list-style: none;
  position: relative;
`;

const ButtonBox = styled.button`
  padding: 1rem;
  width: 8rem;
  height: 6rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 1.2rem;
  border-style: none;
  box-sizing: border-box;
  background-color: #ffffff;
`;
const Slider = styled.div`
  left: 0;
  bottom: 0;
  width: 8rem;
  border-bottom: 4px solid #5e72e4;
  position: absolute;
  transition: 0.3s;
`;

function Header() {
  const slider = useRef(null);
  const tapChange = (event) => {
    slider.current.style.transform = `translateX(${event.target.id * 8}rem)`;
  };
  return (
    <HeaderBox>
      <Link to="/">
        <Logo>Sandbank</Logo>
      </Link>
      <StyleList>
        <ButtonBox id="0" onClick={tapChange}>
          유튜브
        </ButtonBox>
        <ButtonBox id="1" onClick={tapChange}>
          알쓸B잡
        </ButtonBox>
        <ButtonBox id="2" onClick={tapChange}>
          인사이트
        </ButtonBox>
        <Slider ref={slider}>{}</Slider>
      </StyleList>
    </HeaderBox>
  );
}
export default Header;
