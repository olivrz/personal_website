import React from "react";

// Import the NavLink component.
import {NavLink} from 'react-router-dom';

export default function NavBar () {

    return (
        <div className="navbar">
            <NavLink to="/about" className="navLink">About</NavLink>
            <NavLink to="/articles" className="navLink">Articles</NavLink>
            <NavLink to="/categories" className="navLink">Categories</NavLink>
        </div>
    )
}