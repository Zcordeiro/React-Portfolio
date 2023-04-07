import React from 'react';
import PortfolioContainer from './components/PortfolioContainer';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import Stars from './components/Stars';
import './App.css';

function App() {
  return (
    <>
      <div className="body">
        <NavBar />
        <Home />
        <Stars />
      </div>
    </>
  );
}

export default App;
