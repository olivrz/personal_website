import React from 'react';

import pic1 from '../images/nyc_skyline.jpg';

export default function Projects() {
    return (
        <div className="row">
            <div className="pictureBox">
                <img src={pic1} className="picture"/>
                <h6 className="project-title">Project 1 title</h6>
            </div>
            <div className="pictureBox">
                <img src={pic1} className="picture"/>
                <h6 className="project-title">Project 2 title</h6>
            </div>
            <div className="pictureBox">
                <img src={pic1} className="picture"/>
                <h6 className="project-title">Project 3 title</h6>
            </div>
            <div className="pictureBox">
                <img src={pic1} className="picture"/>
                <h6 className="project-title">Project 4 title</h6>
            </div>
        </div>
    )
}