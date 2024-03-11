import logo from './logo.svg';
import React from "react";
import TradingViewWidget from './Components/TradingViewWidget'; 
import TrendingCoins from './Components/TrendingCoins';
import Bitcoin from './Components/Bitcoin';
import Carousel from './Components/Carousel';
import Dynamic from './Components/Dynamic';
import './App.css';
import { Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
      <Route  path="/:token" element={<Dynamic/>} />
    </Routes>
    </>
  );
}

export default App;
