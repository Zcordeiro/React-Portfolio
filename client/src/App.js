import React from 'react';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import FeaturedProjects from './components/FeaturedProjects';
import Stars from './components/Stars';
import Footer from './components/Footer';
import * as te from 'tw-elements';
import './App.css';

function App() {
  return (
    <>
      <div className="body">
        <Home />
        <FeaturedProjects />
        <Stars />
        <Footer />
      </div>
    </>
  );
}

export default App;
