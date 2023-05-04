import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Quotes from '../Quotes/Quotes';
import Home from '../Home/Home';
import Calculator from '../Calculator/Calculator';
import './Layout.scss';

function Layout() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </>
  );
}

export default Layout;
