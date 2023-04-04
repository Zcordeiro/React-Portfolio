import React from "react";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a href="#home" onClick={() => handlePageChange("Home")}>
          Home
        </a>
      </li>
        <li className="nav-item">
        <a href="#about" onClick={() => handlePageChange("About")}>
            About
        </a>
        </li>
    </ul>
  );
}

export default NavTabs;
