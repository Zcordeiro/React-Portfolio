import React from "react";


export default function Projects() {
    return (
        <>
              <div className="mt-20 m-5 text-white italic">
                <h1 id="otherProjectText"
                    className="headingTitle text-4xl italic border border-dashed p-4 hover:bg-slate-300/20 hover:cursor-pointer text-center">
                    Other Projects
                </h1>
                <div id="otherProjectsWindow" className="text-center flex flex-wrap items-center justify-evenly">

                    <div className="projectBoxes" id="project3">
                        <img className="m-2 md:h-52 md:w-72 p-4" src="./assets/images/screenshot-weatherApp.png"
                            alt="screenshot of project"></img>
                        <p className="fadeInBox">
                            <button data-te-toggle="modal" data-te-target="#exampleModalCenteredScrollable"
                                data-te-ripple-init data-te-ripple-color="light" type="button"
                                className="fadeInBoxText blogText text-white bg-slate-900">
                                Learn More!
                            </button>
                        </p>
                        <div className="text-white text-xl">
                            <p>City Weather App
                                <br></br>
                                <a href="https://github.com/Zcordeiro/City-Weather-Forecast" target="_blank">[Github
                                    REPO]</a>
                            </p>
                        </div>
                    </div>

                    <div className="projectBoxes" id="project4">
                        <img className="m-2 md:h-52 md:w-72 p-4" src="./assets/images/screenshot-passwordGen.png"
                            alt="screenshot of project"></img>
                        <p className="fadeInBox">
                            <button data-te-toggle="modal" data-te-target="#exampleModalCenteredScrollable"
                                data-te-ripple-init data-te-ripple-color="light" type="button"
                                className="fadeInBoxText blogText text-white bg-slate-900">
                                Learn More!
                            </button>
                        </p>
                        <div className="text-white text-xl">
                            <p>Random Password Generator
                                <br></br>
                                <a href="https://github.com/Zcordeiro/random-password-generator" target="_blank">[Github
                                    REPO]</a>
                            </p>
                        </div>
                    </div>

                    <div className="projectBoxes" id="project5">
                        <img className="m-2 md:h-52 md:w-72 p-4" src="./assets/images/screenshot-daily-planner.png"
                            alt="screenshot of project"></img>
                        <p className="fadeInBox">
                            <button data-te-toggle="modal" data-te-target="#exampleModalCenteredScrollable"
                                data-te-ripple-init data-te-ripple-color="light" type="button"
                                className="fadeInBoxText blogText text-white bg-slate-900">
                                Learn More!
                            </button>
                        </p>
                        <div className="text-white text-xl">
                            <p>Daily Planner
                                <br></br>
                                <a href="https://github.com/Zcordeiro/daily-tasks-list" target="_blank">[Github
                                    REPO]</a>
                            </p>
                        </div>
                    </div>

                    <div className="projectBoxes" id="project6">
                        <img className="m-2 md:h-52 md:w-72 p-4" src="./assets/images/screenshot-team-profile.png"
                            alt="screenshot of project"></img>
                        <p className="fadeInBox">
                            <button data-te-toggle="modal" data-te-target="#exampleModalCenteredScrollable"
                                data-te-ripple-init data-te-ripple-color="light" type="button"
                                className="fadeInBoxText blogText text-white bg-slate-900">
                                Learn More!
                            </button>
                        </p>
                        <div className="text-white text-xl">
                            <p>Team Profile Generator
                                <br></br>
                                <a href="https://github.com/Zcordeiro/Team-Profile-Generator" target="_blank">[Github
                                    REPO]</a>
                            </p>
                        </div>
                    </div>

                    <div className="projectBoxes" id="project7">
                        <img className="m-2 md:h-52 md:w-72 p-4" src="./assets/images/coming-soon.jpg"
                            alt="screenshot of project"></img>
                        <p className="fadeInBox">
                            <button data-te-toggle="modal" data-te-target="#exampleModalCenteredScrollable"
                                data-te-ripple-init data-te-ripple-color="light" type="button"
                                className="fadeInBoxText blogText text-white bg-slate-900">
                                Learn More!
                            </button>
                        </p>
                        <div className="text-white text-xl">
                            <p>Coming Soon
                                <br></br>
                                <a href="##" target="_blank">[Github REPO]</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}