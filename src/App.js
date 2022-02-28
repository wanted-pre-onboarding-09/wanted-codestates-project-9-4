import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Detail from './components/pages/Detail';
import Header from './components/organisms/header';

function App() {
  // console.log(dummyContent[0]);
  // const url = 'www.naver.com';
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/detail/" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
