import React from 'react';

import pic1 from '../images/nyc_skyline.jpg';

/*
import project1_pic from '../images/';
import project2_pic from '../images/';
import project3_pic from '../images/';
import project4_pic from '../images/';
*/
export default function Projects() {
    return (
        <div className="row picture-grid">

            <div className="pictureBox">
                <div className="projects picture-holder">
                    <a href="https://github.com/olivrz/CafeOrderManager" target="_blank">
                        <img src={pic1} className="picture" alt="Cafe Project"/>
                    </a>
                </div>
                <a href="https://github.com/olivrz/CafeOrderManager" target="_blank">
                    <h5 className="project-title">RU Café Mobile App</h5>
                </a>
            </div>

            <div className="pictureBox">
                <div className="projects picture-holder">
                    <a href="https://github.com/olivrz/express.js-quotes-api" target="_blank">
                        <img src={pic1} className="picture" alt="Quotes API Project"/>
                    </a>
                </div>
                <a href="https://github.com/olivrz/express.js-quotes-api" target="_blank">
                    <h5 className="project-title">Express.js Quotes API</h5>
                </a>
            </div>

            <div className="pictureBox">
                <div className="projects picture-holder">
                    <a href="https://github.com/olivrz/personal_website" target="_blank">
                        <img src={pic1} className="picture" alt="Personal Website Project"/>
                    </a>
                </div>
                <a href="https://github.com/olivrz/personal_website" target="_blank">
                    <h5 className="project-title">Personal Website</h5>
                </a>
            </div>

            <div className="pictureBox">
                <div className="projects picture-holder">
                    <a href="https://github.com/olivrz/Film-Finder" target="_blank">
                        <img src={pic1} className="picture" alt="Film Finder Project"/>
                    </a>

                </div>
                <a href="https://github.com/olivrz/Film-Finder" target="_blank">
                    <h5 className="project-title">Film Finder with TMDB API</h5>
                </a>
            </div>

        </div>
    )
}