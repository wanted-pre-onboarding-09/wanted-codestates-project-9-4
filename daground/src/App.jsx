import React from 'react';
import './App.css';
import Likes from './components/Likes';
import Share from './components/Share';

function App() {
  const url = 'www.naver.com';
  return (
    <div className="App">
      <Likes />
      <Share url={url} />
    </div>
  );
}

export default App;
