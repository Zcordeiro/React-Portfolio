import React from "react";
import FeaturedProject from "../components/FeaturedProjects";
import AllProjects from "../components/AllProjects";


export default function Projects() {
    return (
        <>

            <section class="sm:flex sm:flex-col md:flex md:flex-row justify-center ">
                <AllProjects />
                {/* This will be replaced with projects from Database once set up*/}          
            </section>
        </>
    );
}