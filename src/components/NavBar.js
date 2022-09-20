import React from "react";

// Import the NavLink component.
import {NavLink} from 'react-router-dom';

export default function NavBar () {

    return (
        <div className="container-fluid navbar">
            {/*<img src='/images/nyc_skyline.jpg' id="head-image" /> */}
            <NavLink to="/about" className="navLink">About</NavLink>
            <NavLink to="/projects" className="navLink">Projects</NavLink>
            <NavLink to="/experience" className="navLink">Experience</NavLink>
        </div>
    )
}