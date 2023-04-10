import React from "react";
import Resume from "../assets/zeus-resume.pdf";
import Pic from "../assets/images/screen-shot-resume.png";

function ResumeLink() {
    return (
        <>
            <div class="resume resAndBlobBoxes" id="resume">
                <h1 class="headingTitle text-3xl text-white italic">My Resume</h1>
                <img class="p-2 h-[470.66px] w-[698px] md:h-56 md:w-64" src={Pic}
                    alt="screenshot of resume"></img>
                <span class="fadeInBox"> <a class="fadeInBoxText" href={Resume}
                    target="_blank">PDF</a></span>
            </div>
        </>
    )
};

export default ResumeLink;