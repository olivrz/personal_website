import React from 'react';

import p1_pic from '../images/Project1_Picture.png';
import p2_pic from '../images/Project2_picture.PNG';
import p3_pic from '../images/Project3_picture.PNG';
import p4_pic from '../images/Project4_picture.PNG';


export default function Projects() {
    return (
        <div className="row picture-grid">

            <div className="pictureBox">
                <div className="projects picture-holder">
                    <a href="https://github.com/olivrz/CafeOrderManager" target="_blank">
                        <img src={p1_pic} className="picture" alt="Cafe Project"/>
                    </a>
                </div>
                <a href="https://github.com/olivrz/CafeOrderManager" target="_blank">
                    <h5 className="project-title">RU Café Mobile App</h5>
                </a>
            </div>

            <div className="pictureBox">
                <div className="projects picture-holder">
                    <a href="https://github.com/olivrz/express.js-quotes-api" target="_blank">
                        <img src={p2_pic} className="picture" alt="Quotes API Project"/>
                    </a>
                </div>
                <a href="https://github.com/olivrz/express.js-quotes-api" target="_blank">
                    <h5 className="project-title">Express.js Quotes API</h5>
                </a>
            </div>

            <div className="pictureBox">
                <div className="projects picture-holder">
                    <a href="https://github.com/olivrz/personal_website" target="_blank">
                        <img src={p3_pic} className="picture" alt="Personal Website Project"/>
                    </a>
                </div>
                <a href="https://github.com/olivrz/personal_website" target="_blank">
                    <h5 className="project-title">Personal Website</h5>
                </a>
            </div>

            <div className="pictureBox">
                <div className="projects picture-holder">
                    <a href="https://github.com/olivrz/Film-Finder" target="_blank">
                        <img src={p4_pic} className="picture" alt="Film Finder Project"/>
                    </a>

                </div>
                <a href="https://github.com/olivrz/Film-Finder" target="_blank">
                    <h5 className="project-title">Film Finder with TMDB API</h5>
                </a>
            </div>

        </div>
    )
}