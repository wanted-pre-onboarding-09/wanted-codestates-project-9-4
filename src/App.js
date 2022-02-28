import React from 'react';
import Likes from './components/atoms/Likes';
import Share from './components/atoms/Share';
import dummyContent from './static/dummyContent';
import Main from './components/atoms/Main';
import Test from './components/pages/Test';

function App() {
  const url = 'www.naver.com';
  return (
    <div>
      <Main>
        <Test />
      </Main>
      <Likes id={dummyContent[0].id} likeCnt={dummyContent[0].like_cnt} />
      <Share url={url} />
    </div>
  );
}

export default App;
