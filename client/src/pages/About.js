import React from "react";
import Pic from "../images/self-pic.jpg";

export default function About() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="m-6 p-1 md:w-1/2 text-white rounded-3xl md:text-center sm:text-left">
          <div className="flex items-center justify-center">
            <div className="mt-20 text-2xl md:text-3xl sm:leading-5 md:leading-9">
              <p class="text-blue-50">
                About Me{" "}
              </p>
              <p class="text-blue-50 text-xl"> I am a <span className="font-bold">Web Developer</span> with nearly a decade of management
                experience in the hospitality industry and an ever growing
                interest to learn new technologies. A <span className="font-bold">problem solver</span> comfortable
                working in fast paced environments, dedicated to accomplishing
                goals and completing projects in the most detailed and efficient
                manner possible.</p>
            </div>
          
          </div>
        </div>
        <img
          className="aboutMeImage h-60 w-60 rounded-2xl m-4 mt-20"
          src={Pic}
          alt="Picture of Zeus"
        ></img>
      </div>
    </>
  );
}
