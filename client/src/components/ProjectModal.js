import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_PROJECT } from '../utils/queries';



export default function ProjectModal({projectId, index}) {
    console.log("projectId: ", projectId);
    console.log("index: ", index);
    const { loading, data } = useQuery(QUERY_SINGLE_PROJECT, {
        variables: { id: projectId },
        });

    const singleProject = data?.singleProject || {};
    console.log(singleProject);



    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <div>
                <div data-te-modal-init
                    className="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                    id={`project`+index} tabIndex="-1" aria-labelledby={`project`+index}
                    aria-modal="true" role="dialog">
                    <div data-te-modal-dialog-ref
                        className="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]">
                        <div
                            className="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                            <div
                                className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                                <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                                    id="modalLabel">
                                    {singleProject.title}
                                </h5>
                                <button type="button"
                                    className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                                    data-te-modal-dismiss aria-label="Close">
                                    X
                                </button>
                            </div>
                            <div className="relative p-4">
                                <img id="projectImage" src={`../assets/images/${singleProject.image}`} alt="image of project"></img>
                                <p id="projectDescription" className="text-cyan-50">{singleProject.description} </p>
                                <br></br> <br></br>
                                <p className="text-xl font-semibold text-blue-300 underline">Technologies Used:
                                </p>
                                {singleProject.technologies.map((tech, index) => (
                                    <p key={index} className="text-med italic text-blue-300 m-2">{tech}</p>
                                ))}

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
                                        href={singleProject.github} target="_blank">Github
                                        REPO</a>
                                </button>
                                <button type="button"
                                    data-te-ripple-init data-te-ripple-color="light">
                                    <a id="siteLink"
                                        className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                                        href={singleProject.deployed} target="_blank">Visit Site!</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}