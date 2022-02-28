import React from 'react';
import './App.css';
import Likes from './components/atoms/Likes';
import Share from './components/atoms/Share';
import dummyContent from './static/dummyContent';

function App() {
  // console.log(dummyContent[0]);
  const url = 'www.naver.com';
  return (
    <div className="App">
      <Likes id={dummyContent[0].id} likeCnt={dummyContent[0].like_cnt} />
      <Share url={url} />
    </div>
  );
}

export default App;
