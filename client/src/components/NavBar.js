import React from "react";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <>
      <nav
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
            className={currentPage === 'About' ? 'nav-link active m-2 p-1 hover:bg-slate-300 text-white hover:text-black rounded-3xl' : 'nav-link m-2 p-1 hover:bg-slate-300 text-white hover:text-black rounded-3xl'}
            href="#about"
            onClick={() => handlePageChange("About")}
          >
            About Me
          </a>
          <a
            className={currentPage === 'Blog' ? 'nav-link active m-2 p-1 hover:bg-slate-300 text-white hover:text-black rounded-3xl' : 'nav-link m-2 p-1 hover:bg-slate-300 text-white hover:text-black rounded-3xl'}
            href="#blog"
            onClick={() => handlePageChange("Blog")}
          >
            Blog
          </a>
          <a
            className={currentPage === 'Projects' ? 'nav-link active m-2 p-1 hover:bg-slate-300 text-white hover:text-black rounded-3xl' : 'nav-link m-2 p-1 hover:bg-slate-300 text-white hover:text-black rounded-3xl'}
            href="#projects"
            onClick={() => handlePageChange("Projects")}
          >
            Projects
          </a>
          <a
            className={currentPage === 'Contact' ? 'nav-link active m-2 p-1 hover:bg-slate-300 text-white hover:text-black rounded-3xl' : 'nav-link m-2 p-1 hover:bg-slate-300 text-white hover:text-black rounded-3xl'}
            href="#contact"
            onClick={() => handlePageChange("Contact")}
          >
            Contact
          </a>
        </div>

      </nav>
    </>
  );
}

export default NavTabs;
