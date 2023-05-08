import React from "react";
import { useState } from "react";
import ProjectModal from "./ProjectModal";



export default function FeaturedProjects({ projects }) {
    const [projectsVisible, setProjectsVisible] = useState(true);

    const toggleProjectsWindow = () => {
        setProjectsVisible(!projectsVisible);
    }

    // create a function to collect the project image from the utils folder and display's it in the correct project box by matching it to the project title.

    if (!projects) {
        return <h3>No Current Projects</h3>
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
                    {projects &&
                        projects.map((project, index) => (
                            <div key={index} className="projectBoxes">
                                <img src={`../assets/images/${project.image}`} className="m-2 md:h-52 md:w-72 p-4"
                                    alt="screenshot of project"></img>
                                <p className="fadeInBox">
                                    <button id={index} data-te-toggle="modal"
                                        data-te-target={`#project`+index} data-te-ripple-init
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
                                <ProjectModal projectId={project._id} index={index} />
                            </div>

                        ))
                    }
                </div>
            </div>
        </>
    );
}