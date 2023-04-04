import { useState } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";

function PortfolioLayout() {
  const [currentPage, setPageChange] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "About") {
      return <About />;
    }
  };

  const handlePageChange = (page) => setPageChange(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage function to display the appropriate content */}
      {renderPage()}
    </div>
  );
}

export default PortfolioLayout;