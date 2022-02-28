import React from 'react';
import './App.css';
import Likes from './components/atoms/Likes';
import Share from './components/atoms/Share';
import dummyContent from './static/dummyContent';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Detail from './components/pages/Detail';
import Header from './components/organisms/header';

function App() {
  // console.log(dummyContent[0]);
  const url = 'www.naver.com';
  return (
    <BrowserRouter>
      <Likes id={dummyContent[0].id} likeCnt={dummyContent[0].like_cnt} />
      <Share url={url} />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/detail/" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
