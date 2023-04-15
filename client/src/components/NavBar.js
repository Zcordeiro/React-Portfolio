import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {
  return (
    <>
      <nav
        className="navFonts flex justify-evenly bg-slate-800 p-2 items-center w-screen fixed top-0 md:flex"
      >
        <h1 id="mainNavText" className="text-4xl text-white">
          Zeus Cordeiro's Portfolio
        </h1>
        <div className="text-2xl hidden space-x-8 md:flex">
          <Link to="/" className='nav-link m-2 p-1 hover:bg-slate-300 text-white hover:text-black rounded-3xl'>
            <div>
              Home
            </div>
          </Link>
          <Link to="/about" className='nav-link m-2 p-1 hover:bg-slate-300 text-white hover:text-black rounded-3xl'>
            <div>
              About
            </div>
          </Link>
          <Link to="/blog" className='nav-link m-2 p-1 hover:bg-slate-300 text-white hover:text-black rounded-3xl'>
            <div>
              Blog
            </div>
          </Link>

          <Link to="/projects" className='nav-link m-2 p-1 hover:bg-slate-300 text-white hover:text-black rounded-3xl'>
            <div>
              Projects
            </div>
          </Link>
          <Link to="/contact" className='nav-link m-2 p-1 hover:bg-slate-300 text-white hover:text-black rounded-3xl'>
            <div>
              Contact
            </div>
          </Link>
        </div>

      </nav>
    </>
  );
}

export default NavTabs;
