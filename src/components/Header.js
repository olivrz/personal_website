import React from "react";

// Import the NavLink component.
import {NavLink} from 'react-router-dom';

export default function Header () {

    return (
        <div className="header">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/articles">Articles</NavLink>
            <NavLink to="/categories">Categories</NavLink>
        </div>
    )
}