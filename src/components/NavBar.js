import React from "react";

// Import the NavLink component.
import {NavLink} from 'react-router-dom';

export default function NavBar () {

    return (
        <div className="container-fluid navbar section-shadow-light">
            {/*<img src='/images/nyc_skyline.jpg' id="head-image" /> */}
            <a href="#experience" className="navLink">Experience</a>
            <a href="#projects" className="navLink">Projects</a>
            <a href="#contact" className="navLink">Contact</a>
        </div>
    )
}