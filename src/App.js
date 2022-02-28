import React from 'react';

import Likes from './components/atoms/Likes';
import Share from './components/atoms/Share';
import dummyContent from './static/dummyContent';

import Main from './components/atoms/Main';
import Container from './components/atoms/Container';

function App() {
  // console.log(dummyContent[0]);
  const url = 'www.naver.com';
  return (
    <div>
      <Main>
        <Container />
      </Main>
      <Likes id={dummyContent[0].id} likeCnt={dummyContent[0].like_cnt} />
      <Share url={url} />
    </div>
  );
}

export default App;
