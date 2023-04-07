import React, { useState } from 'react';
import NavTabs from './NavBar';
import Home from './pages/Home';
import About from './pages/About';



export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {<NavTabs />}
      {renderPage()}
    </div>
  );
}
