import React from 'react';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Stars from './components/Stars';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <div className="body">
        <Home />
        <Stars />
        <Footer />
      </div>
    </>
  );
}

export default App;
