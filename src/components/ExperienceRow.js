import React from 'react';

//An experience row includes
export default function ExperienceRow(props){
    return (
        <div className ='experience-row'>

            <div className="col-md experience-left">
                <h5 className="experience-location">{props.experienceDetails.location}</h5>
                <p className="experience-description">{props.experienceDetails.date}</p>
            </div>
            <div className="col-md experience-right">
                <h5 className="experience-title">{props.experienceDetails.title}</h5>
                <p className="experience-description">{props.experienceDetails.description}</p>
            </div>

        </div>
    )
}