import React from "react";
import AstroMusic from "../assets/images/screenshot-astromusic.png";
import StudyTimer from "../assets/images/screenshot-timer.png";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_PROJECTS } from "./utils/queries";

export default function FeaturedProjects() {
    const { loading, data } = useQuery(QUERY_PROJECTS);
    const projects = data?.projects || [];


    return (
        <>
            
        </>
    );
}