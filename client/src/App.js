import React from 'react';
import DisplayPage from './pages/DisplayPage';
import Stars from './components/Stars';
import Footer from './components/Footer';
import * as te from 'tw-elements';
import './App.css';

function App() {
  return (
    <>
      <div className="body">
        <DisplayPage />
        <Stars />
        <Footer />
      </div>
    </>
  );
}

export default App;
