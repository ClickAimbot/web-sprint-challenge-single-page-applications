import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Homepage'
import Pizza from './Components/Pizza'
import Confirmation from './Components/Confirmation'

const App = () => {
  return (
      <div className='App'>
        <nav>
          <h1 className='store-header'>BloomTech Goes Delivery</h1>
          <div className='nav-links'>
            <Link to="/">Home</Link>
            <Link to="Help">Help</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="pizza" element={<Pizza />} />
        </Routes>

      </div>
  );
};
export default App;
