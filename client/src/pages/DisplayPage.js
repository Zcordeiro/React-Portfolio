import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import About from "./About";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import Blog from "./Blog";

export default function DisplayPage() {
    return (
        <Router>
            <NavBar />
                <Routes>
                    <Route exact path="/" Component={Home} />
                    <Route exact path="/about" Component={About} />
                    <Route exact path="/projects" Component={Projects} />
                    <Route exact path="/contact" Component={Contact} />
                    <Route exact path="/blog" Component={Blog} />
                </Routes>
        </Router>
    );
}



