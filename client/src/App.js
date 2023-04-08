import React from 'react';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Stars from './components/Stars';
import './App.css';

function App() {
  return (
    <>
      <div className="body">
        <NavBar />
        <Home />
        <Projects />
        <Stars />
      </div>
    </>
  );
}

export default App;
