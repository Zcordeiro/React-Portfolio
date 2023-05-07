import React from "react";
import FeaturedProject from "../components/FeaturedProjects";
import AllProjects from "../components/AllProjects";
import { useQuery } from "@apollo/client";
import { QUERY_PROJECTS } from "../utils/queries";



export default function Projects() {
    const { loading, data } = useQuery(QUERY_PROJECTS);
    const projects = data?.projects || [];
    console.log(projects);
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>

            <section className="sm:flex sm:flex-col md:flex md:flex-row justify-center ">
                <FeaturedProject projects={projects} />
            </section>


            <section className="sm:flex sm:flex-col md:flex md:flex-row justify-center ">
                <AllProjects />         
            </section>
        </>
    );
}