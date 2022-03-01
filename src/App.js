import React from 'react';
import './App.css';
import Likes from './components/atoms/Likes';
// import Share from './components/atoms/Share';
import dummyContent from './static/dummyContent';
// import dummySector from './static/dummySector';
// import DetailPage from './components/pages/DetailPage';

function App() {
  return (
    <div className="App">
      <Likes id={dummyContent[0].id} likeCnt={dummyContent[0].like_cnt} />
      {/* <Share url={url} /> */}
      {/* <DetailPage content={dummySector[0]} /> */}
    </div>
  );
}

export default App;
