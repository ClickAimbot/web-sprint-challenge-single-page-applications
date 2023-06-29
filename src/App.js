import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Homepage'

const App = () => {
  return (
      <div className='App'>
        <nav>
          <h1 className='store-header'>BloomTech Goes Delivery</h1>
          <div className='nav-links'>
            <Link to="/">Home</Link>
            <Link to="help">Help</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

      </div>
  );
};
export default App;
