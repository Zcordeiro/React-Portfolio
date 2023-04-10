import React from "react";
import AstroMusic from "../assets/images/screenshot-astromusic.png";
import StudyTimer from "../assets/images/screenshot-timer.png";
import { useQuery } from "@apollo/client";
import { QUERY_PROJECTS } from "./utils/queries";

export default function FeaturedProjects() {
    const { loading, data } = useQuery(QUERY_PROJECTS);
    const projects = data?.projects || [];


    return (
        <>
            <div className="mt-20 m-5 text-white">

                <h1 className="headingTitle text-4xl italic border border-dashed p-4 hover:bg-slate-300/20 hover:cursor-pointer text-center">
                    Featured
                    Projects</h1>
                <div className="fprojectContainer text-center flex flex-wrap items-center justify-evenly">
                    <div className="fprojectBoxes">
                    {projects.map((project) => (
                        <div key={project._id}>
                            <img className="m-2 md:h-52 md:w-72 p-4" src={project.image}
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
                                <p>{project.title}
                                    <br></br>
                                    <a href={project.github} target="_blank">[Github
                                        REPO]</a>
                                </p>
                            </div>
                        </div>
                    ))}
                    </div>

                    <div className="fprojectBoxes" id="project1">
                        <img className="m-2 md:h-52 md:w-72 p-4" src={AstroMusic}
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

                    <div className="fprojectBoxes" id="project2">
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
                </div>
            </div>
        </>
    );
}