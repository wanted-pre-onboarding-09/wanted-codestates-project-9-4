import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Detail from './components/pages/Detail';
import Header from './components/organisms/header';
import ScrollToTop from './components/molecules/ScrollTop';

localStorage.clear(); /* refresh 일 경우 localStorage 모두 삭제 */

function App() {
  return (
    <BrowserRouter basename={process.env.REACT_APP_BASE_URL}>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
