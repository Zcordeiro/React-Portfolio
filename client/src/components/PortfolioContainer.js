import React from 'react';
import { useState } from 'react';
import NavTabs from './NavBar';
import Home from './pages/Home';
import About from './pages/About';



export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      {<NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />}
      {renderPage()}
    </>
  );
}
