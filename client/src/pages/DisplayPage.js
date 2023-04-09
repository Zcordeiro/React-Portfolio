import React, {useState} from "react";
import NavBar from "../components/NavBar";
import About from "./About";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import Blog from "./Blog";

export default function DisplayPage() {
    const [currentPage, setPageChange] = useState("Home");

    const renderPage = () => {
        if (currentPage === "Home") {
            return <Home />;
        } else if (currentPage === "About") {
            return <About />;
        } else if (currentPage === "Projects") {
            return <Projects />;
        } else if (currentPage === "Contact") {
            return <Contact />;
        } else if (currentPage === "Blog") {
            return <Blog />;
        }
    };

    const handlePageChange = (page) => setPageChange(page);

    return (
        <>

            {<NavBar currentPage={currentPage} handlePageChange={handlePageChange} />}
            {renderPage()}

        </>
    );

}


