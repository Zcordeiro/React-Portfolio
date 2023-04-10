import React, {useState} from 'react';
import AllProjects from '../components/AllProjects';
import ContactLinks from '../components/ContactLinks';
import ResumeLink from '../components/ResumeLink';
import Pic from "../assets/images/self-pic.jpg";


export default function Home() {

  return (
    <>

      <div className="flex justify-center items-center">
        <div className="m-6 p-1 md:w-1/2 text-white rounded-3xl md:text-center sm:text-left introText">
          <div className="flex items-center justify-center">
            <div className="mt-20 text-2xl md:text-3xl sm:leading-5 md:leading-9">
              <p class="text-blue-50">
                Hello and thank you for visiting my portfolio! My name is Zeus I
                live in Tampa, Florida. </p>
              <br></br>
              <p> A Full Stack Developer with an ever growing desire to learn new technologies.
                I also write about my life, learning experiences and hobbies on my blog
              </p>
            </div>
          </div>
        </div>
        <img
          className="aboutMeImage h-60 w-60 rounded-2xl m-4 mt-20"
          src={Pic}
          alt="Picture of Zeus"
        ></img>
      </div>

      <div className="sm:flex sm:flex-col md:flex md:flex-row justify-center ">
        <AllProjects />
      </div>

      <div className="sm:flex sm:flex-col sm:text-left md:flex md:flex-row md:text-center justify-evenly m-5 mt-20">
        <ResumeLink />
        <ContactLinks />
      </div>
    </>
  );
};
