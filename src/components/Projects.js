import React from 'react';

import pic1 from '../images/nyc_skyline.jpg';

export default function Projects() {
    return (
        <div className="row picture-grid">

            <div className="pictureBox">
                <div className="projects picture-holder">
                    <img src={pic1} className="picture"/>
                </div>
                <h6 className="project-title">Project 1 title</h6>
            </div>

            <div className="pictureBox">
                <div className="projects picture-holder">
                    <img src={pic1} className="picture"/>
                </div>
                <h6 className="project-title">Project 2 title</h6>
            </div>

            <div className="pictureBox">
                <div className="projects picture-holder">
                    <img src={pic1} className="picture"/>
                </div>
                <h6 className="project-title">Project 3 title</h6>
            </div>

            <div className="pictureBox">
                <div className="projects picture-holder">
                    <img src={pic1} className="picture"/>
                </div>
                <h6 className="project-title">Project 4 title</h6>
            </div>

        </div>
    )
}