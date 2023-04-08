import React from "react";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <>
      <nav
        id="mainNav"
        className="navFonts flex justify-evenly bg-slate-800 p-2 items-center w-screen fixed top-0 md:flex"
      >
        <h1 id="mainNavText" className="text-4xl text-white">
          Zeus Cordeiro's Portfolio
        </h1>
        <div className="text-2xl hidden space-x-8 md:flex">
          <a
            className={currentPage === 'Home' ? 'nav-link active m-2 p-1 hover:bg-slate-300 text-white hover:text-black rounded-3xl' : 'nav-link m-2 p-1 hover:bg-slate-300 text-white hover:text-black rounded-3xl'}
            href="#home"
            onClick={() => handlePageChange("Home")}
          >
            Home
          </a>
          <a
            id="aboutMeLink"
            className={currentPage === 'About' ? 'nav-link active m-2 p-1 hover:bg-slate-300 text-white hover:text-black rounded-3xl' : 'nav-link m-2 p-1 hover:bg-slate-300 text-white hover:text-black rounded-3xl'}
            href="#about"
            onClick={() => handlePageChange("About")}
          >
            About Me
          </a>
        </div>

      </nav>
    </>
  );
}

export default NavTabs;
