import React, { useState } from "react";
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
                                data-te-target="#popupBox1" data-te-ripple-init
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

                    <div id="popup1">
                        <div data-te-modal-init
                            className="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                            id="popupBox1" tabindex="-1" aria-labelledby="popupBox1"
                            aria-modal="true" role="dialog">
                            <div data-te-modal-dialog-ref
                                className="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]">
                                <div
                                    className="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                                    <div
                                        className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                                        <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                                            id="modalLabel">
                                            AstroMusic
                                        </h5>
                                        <button type="button"
                                            className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                                            data-te-modal-dismiss aria-label="Close">
                                            X
                                        </button>
                                    </div>
                                    <div className="relative p-4">
                                        <img id="projectImage" src={AstroImage} alt="image of project"></img>
                                        <p id="projectDescription" className="text-cyan-50">AstroMusic a way to help connect you to your daily horoscope and discover some new music using your astrological sign! We've carefully currated a playlist based off of your mood and have discovered your lucky hour and number for the day</p>
                                        <br></br> <br></br>
                                        <p className="text-xl font-semibold text-blue-300 underline hover:italic">Technologies Used:
                                        </p>
                                        <p id="techUsed" className="text-med italic text-blue-300">HTML - CSS - JavaScript - Tailwind CSS - JQuery - Aztro API - Spotify API</p>

                                    </div>
                                    <div
                                        className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                                        <button type="button"
                                            className="inline-block rounded bg-slate-800 px-6 pt-2.5 pb-2 text-xs text-white font-medium uppercase leading-normal text-slate-700 transition duration-150 ease-in-out hover:bg-slate-accent-100 focus:bg-slate-accent-100 focus:outline-none focus:ring-0 active:bg-slate-accent-200"
                                            data-te-modal-dismiss data-te-ripple-init data-te-ripple-color="light">
                                            Close
                                        </button>
                                        <button type="button"
                                            data-te-ripple-init data-te-ripple-color="light">
                                            <a id="gitRepo"
                                                className="inline-block px-6 py-2.5 bg-zinc-900 text-white font-medium text-xs leading-tight uppercase rounded  hover:bg-zinc-800  focus:bg-zinc-700 focus:outline-none focus:ring-0 active:bg-zinc-800  transition duration-150 ease-in-out m-1"
                                                href="https://github.com/Astro-Div/Astro-Music" target="_blank">Github
                                                REPO</a>
                                        </button>
                                        <button type="button"
                                            data-te-ripple-init data-te-ripple-color="light">
                                            <a id="siteLink"
                                                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                                                href="https://astro-div.github.io/Astro-Music" target="_blank">Visit Site!</a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="projectBoxes" id="project2">
                        <img className="m-2 md:h-52 md:w-72 p-4" src={StudyTimer}
                            alt="screenshot of project"></img>
                        <p className="fadeInBox">
                            <button id="featuredProject2" data-te-toggle="modal"
                                data-te-target="#popupBox2" data-te-ripple-init
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

                    <div id="popup2">
                        <div data-te-modal-init
                            className="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                            id="popupBox2" tabindex="-1" aria-labelledby="popupBox2"
                            aria-modal="true" role="dialog">
                            <div data-te-modal-dialog-ref
                                className="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]">
                                <div
                                    className="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                                    <div
                                        className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                                        <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                                            id="modalLabel">
                                            Study Timer
                                        </h5>
                                        <button type="button"
                                            className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                                            data-te-modal-dismiss aria-label="Close">
                                            X
                                        </button>
                                    </div>
                                    <div className="relative p-4">
                                        <img id="projectImage" src={StudyTimer} alt="image of project"></img>
                                        <p id="projectDescription" className="text-cyan-50">This is a pomodoro style timer made to help the user focus while studying and working. Users can also adjust the times and backgrounds to better suite their needs.</p>
                                        <br></br> <br></br>
                                        <p className="text-xl font-semibold text-blue-300 underline hover:italic">Technologies Used:
                                        </p>
                                        <p id="techUsed" className="text-med italic text-blue-300">HTML - CSS - JavaScript - Tailwind CSS - Express</p>

                                    </div>
                                    <div
                                        className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                                        <button type="button"
                                            className="inline-block rounded bg-slate-800 px-6 pt-2.5 pb-2 text-xs text-white font-medium uppercase leading-normal text-slate-700 transition duration-150 ease-in-out hover:bg-slate-accent-100 focus:bg-slate-accent-100 focus:outline-none focus:ring-0 active:bg-slate-accent-200"
                                            data-te-modal-dismiss data-te-ripple-init data-te-ripple-color="light">
                                            Close
                                        </button>
                                        <button type="button"
                                            data-te-ripple-init data-te-ripple-color="light">
                                            <a id="gitRepo"
                                                className="inline-block px-6 py-2.5 bg-zinc-900 text-white font-medium text-xs leading-tight uppercase rounded  hover:bg-zinc-800  focus:bg-zinc-700 focus:outline-none focus:ring-0 active:bg-zinc-800  transition duration-150 ease-in-out m-1"
                                                href="https://github.com/Zcordeiro/Study-Timer" target="_blank">Github
                                                REPO</a>
                                        </button>
                                        <button type="button"
                                            data-te-ripple-init data-te-ripple-color="light">
                                            <a id="siteLink"
                                                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                                                href="https://study-timer-psi.vercel.app/" target="_blank">Visit Site!</a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="projectBoxes" id="project3">
                        <img className="m-2 md:h-52 md:w-72 p-4" src={WeatherApp}
                            alt="screenshot of project"></img>
                        <p className="fadeInBox">
                            <button data-te-toggle="modal" data-te-target="#popupBox3"
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

                    <div id="popup3">
                        <div data-te-modal-init
                            className="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                            id="popupBox3" tabindex="-1" aria-labelledby="popupBox3"
                            aria-modal="true" role="dialog">
                            <div data-te-modal-dialog-ref
                                className="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]">
                                <div
                                    className="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                                    <div
                                        className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                                        <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                                            id="modalLabel">
                                            City Weather App
                                        </h5>
                                        <button type="button"
                                            className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                                            data-te-modal-dismiss aria-label="Close">
                                            X
                                        </button>
                                    </div>
                                    <div className="relative p-4">
                                        <img id="projectImage" src={WeatherApp} alt="image of project"></img>
                                        <p id="projectDescription" className="text-cyan-50">Simple weather app using the Openweather API that allows you to search your city and get back a five day forecast.</p>
                                        <br></br> <br></br>
                                        <p className="text-xl font-semibold text-blue-300 underline hover:italic">Technologies Used:
                                        </p>
                                        <p id="techUsed" className="text-med italic text-blue-300">HTML - CSS - JavaScript - Openweather API - Dayjs</p>

                                    </div>
                                    <div
                                        className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                                        <button type="button"
                                            className="inline-block rounded bg-slate-800 px-6 pt-2.5 pb-2 text-xs text-white font-medium uppercase leading-normal text-slate-700 transition duration-150 ease-in-out hover:bg-slate-accent-100 focus:bg-slate-accent-100 focus:outline-none focus:ring-0 active:bg-slate-accent-200"
                                            data-te-modal-dismiss data-te-ripple-init data-te-ripple-color="light">
                                            Close
                                        </button>
                                        <button type="button"
                                            data-te-ripple-init data-te-ripple-color="light">
                                            <a id="gitRepo"
                                                className="inline-block px-6 py-2.5 bg-zinc-900 text-white font-medium text-xs leading-tight uppercase rounded  hover:bg-zinc-800  focus:bg-zinc-700 focus:outline-none focus:ring-0 active:bg-zinc-800  transition duration-150 ease-in-out m-1"
                                                href="https://github.com/Zcordeiro/City-Weather-Forecast" target="_blank">Github
                                                REPO</a>
                                        </button>
                                        <button type="button"
                                            data-te-ripple-init data-te-ripple-color="light">
                                            <a id="siteLink"
                                                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                                                href="https://zcordeiro.github.io/City-Weather-Forecast/" target="_blank">Visit Site!</a>
                                        </button>
                                    </div>
                                </div>
                            </div>
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

                    <div id="popupBox">
                        <div data-te-modal-init
                            className="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                            id="exampleModalCenteredScrollable" tabindex="-1" aria-labelledby="exampleModalCenteredScrollable"
                            aria-modal="true" role="dialog">
                            <div data-te-modal-dialog-ref
                                className="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]">
                                <div
                                    className="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                                    <div
                                        className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                                        <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                                            id="modalLabel">
                                            Modal title
                                        </h5>
                                        <button type="button"
                                            className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                                            data-te-modal-dismiss aria-label="Close">
                                            X
                                        </button>
                                    </div>
                                    <div className="relative p-4">
                                        <img id="projectImage" src=" " alt="image of project"></img>
                                        <p id="projectDescription" className="text-cyan-50">Lorem ipsum dolor sit amet consectetur
                                            adipisicing elit. Quo
                                            beatae, perferendis ipsam neque explicabo totam non deleniti ipsum facere. Quas
                                            assumenda suscipit ducimus eligendi, deserunt veniam consectetur quaerat quos quo
                                            consequuntur labore! Consequuntur quaerat accusamus voluptatibus saepe, rem
                                            reprehenderit rerum!</p>
                                        <br></br> <br></br>
                                        <p className="text-xl font-semibold text-blue-300 underline hover:italic">Technologies Used:
                                        </p>
                                        <p id="techUsed" className="text-med italic text-blue-300">Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Quo
                                            beatae, perferendis ipsam neque explicabo totam non deleniti ipsum facere. Quas
                                            assumenda suscipit ducimus eligendi, deserunt veniam consectetur quaerat quos quo
                                            consequuntur labore! Consequuntur quaerat accusamus voluptatibus saepe, rem
                                            reprehenderit rerum!</p>

                                    </div>
                                    <div
                                        className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                                        <button type="button"
                                            className="inline-block rounded bg-slate-800 px-6 pt-2.5 pb-2 text-xs text-white font-medium uppercase leading-normal text-slate-700 transition duration-150 ease-in-out hover:bg-slate-accent-100 focus:bg-slate-accent-100 focus:outline-none focus:ring-0 active:bg-slate-accent-200"
                                            data-te-modal-dismiss data-te-ripple-init data-te-ripple-color="light">
                                            Close
                                        </button>
                                        <button type="button"
                                            data-te-ripple-init data-te-ripple-color="light">
                                            <a id="gitRepo"
                                                className="inline-block px-6 py-2.5 bg-zinc-900 text-white font-medium text-xs leading-tight uppercase rounded  hover:bg-zinc-800  focus:bg-zinc-700 focus:outline-none focus:ring-0 active:bg-zinc-800  transition duration-150 ease-in-out m-1"
                                                href=" " target="_blank">Github
                                                REPO</a>
                                        </button>
                                        <button type="button"
                                            data-te-ripple-init data-te-ripple-color="light">
                                            <a id="siteLink"
                                                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                                                href=" " target="_blank">Visit Site!</a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}