import React, {useState} from "react";
import AstroImage from "../assets/images/screenshot-astromusic.png";
import StudyTimer from "../assets/images/screenshot-timer.png";
import WeatherApp from "../assets/images/screenshot-weatherApp.png";
import TeamProfile from "../assets/images/screenshot-team-profile.png";
import NoteTaker from "../assets/images/screenshot-notes.png";
import DailyPlanner from "../assets/images/screenshot-daily-planner.png";


export default function AllProjects() {
    const [projectsVisible, setProjectsVisible] = useState(true);

    const toggleProjectsWindow = () => {
        setProjectsVisible(!projectsVisible);
    }
    return (
        <>
              <div className="mt-20 m-5 text-white italic">
                <h1 id="ProjectText"
                    className="headingTitle text-4xl italic border border-dashed p-4 hover:bg-slate-300/20 hover:cursor-pointer text-center"
                    onClick={toggleProjectsWindow}
                    >
                    Projects
                </h1>
                <div id="ProjectsWindow" className={`text-center flex flex-wrap items-center justify-evenly ${projectsVisible ? '' : 'hidden'}`}>

                <div className="projectBoxes" id="project1">
                        <img className="m-2 md:h-52 md:w-72 p-4" src={AstroImage}
                            alt="screenshot of project"></img>
                        <p className="fadeInBox">
                            <button id="featuredProject1" data-te-toggle="modal"
                                data-te-target="#exampleModalCenteredScrollable" data-te-ripple-init
                                data-te-ripple-color="light" type="button"
                                className="fadeInBoxText blogText text-white bg-slate-900">
                                Learn More!
                            </button>
                        </p>
                        <div className="text-white text-xl">
                            <p>AstroMusic
                                <br></br>
                                <a href="https://github.com/Astro-Div/Astro-Music" target="_blank">[Github
                                    REPO]</a>
                            </p>
                        </div>
                    </div>

                    <div className="projectBoxes" id="project2">
                        <img className="m-2 md:h-52 md:w-72 p-4" src={StudyTimer}
                            alt="screenshot of project"></img>
                        <p className="fadeInBox">
                            <button id="featuredProject2" data-te-toggle="modal"
                                data-te-target="#exampleModalCenteredScrollable" data-te-ripple-init
                                data-te-ripple-color="light" type="button"
                                className="fadeInBoxText blogText text-white bg-slate-900">
                                Learn More!
                            </button>
                        </p>
                        <div className="text-white text-xl">
                            <p>Pomodoro Study Timer
                                <br></br>
                                <a href="https://github.com/Zcordeiro/Study-Timer" target="_blank">[Github
                                    REPO]</a>
                            </p>
                        </div>
                    </div>

                    <div className="projectBoxes" id="project3">
                        <img className="m-2 md:h-52 md:w-72 p-4" src={WeatherApp}
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
                        <img className="m-2 md:h-52 md:w-72 p-4" src={TeamProfile}
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

                    <div className="projectBoxes" id="project5">
                        <img className="m-2 md:h-52 md:w-72 p-4" src={NoteTaker}
                            alt="screenshot of project"></img>
                        <p className="fadeInBox">
                            <button data-te-toggle="modal" data-te-target="#exampleModalCenteredScrollable"
                                data-te-ripple-init data-te-ripple-color="light" type="button"
                                className="fadeInBoxText blogText text-white bg-slate-900">
                                Learn More!
                            </button>
                        </p>
                        <div className="text-white text-xl">
                            <p>Note Taker
                                <br></br>
                                <a href="https://github.com/Zcordeiro/random-password-generator" target="_blank">[Github
                                    REPO]</a>
                            </p>
                        </div>
                    </div>

                    <div className="projectBoxes" id="project5">
                        <img className="m-2 md:h-52 md:w-72 p-4" src={DailyPlanner}
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

                </div>
            </div>
        </>
    );
}