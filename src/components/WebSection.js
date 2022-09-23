import React from 'react';

//Import components
import ExperienceRow from './ExperienceRow';
import Projects from './Projects';

//Work experience then projects

const renderWebSection = (sectionName) => {
    switch(sectionName) {
        case 'experience': {

        }
        case 'projects': {

        }
    }
}

export default function WebSection(){

    const rutgersExperienceDetails = {
        location: 'Rutgers University',
        title: "Bachelor of Science in Computer Engineering",
        date: "Sept. 2020 - May 2024",
        description: "GPA: 3.8/4.0, Dean’s List (Fall 2020 – Spring 2022), minor in Computer Science\n" +
            "Computer Engineering courses: Computer Architecture and Assembly Language, Electronic Devices, Linear Systems and Signals, Digital Logic Design\n" +
            "Computer Science courses: Software Methodology, Data Structures and Algorithms, Discrete Structures I, Principles of Information and Databases."
    }

    const hillsExperienceDetails = {
        location: 'Morris Hills High School',
        title: "High School Diploma",
        date: "Sept. 2016 - June 2020",
        description: "GPA: 100.4, Principle’s List, Magnet Program Graduate"
    }

    const shiExperienceDetails = {
        location: 'SHI International Corp.',
        title: "Data Center Tech Intern",
        date: "June 2022 - Sept. 2022",
        description: "Installed servers, network switches, and cables among other components into data center server racks according to documentation and customer specification.\n" +
            "Configured, validated, and troubleshooted data center hardware, software, and systems."
    }

    const edcDetails = {
        location: 'Electronic Drives and Controls, Inc.',
        title: "Control System Manufacturing Intern",
        date: "June 2019 - Aug. 2019",
        description: "Collaborated with electrical engineers in manufacturing custom electronic drive solutions for automation equipment.\n" +
            "Installed and wired electronic drives, programmable logic controllers, power supplies, circuit breakers, and other components according to schematic diagrams."
    }

    return (
        <div>
            <div className="color2">
                <div className="row section topspace align-items-center">
                    <h2 className="section-title" id="experience">Experience</h2>
                    <h3 className="experience-title">Education</h3>
                    {/*Render two education rows w/ buttons that link to more details*/}
                    <ExperienceRow experienceDetails={rutgersExperienceDetails}/>
                    <ExperienceRow experienceDetails={hillsExperienceDetails} />

                    <h3 className="experience-title">Work Experience</h3>
                    {/* Render two work experience rows w/ buttons that link to more details*/}
                    <ExperienceRow experienceDetails={shiExperienceDetails} />
                    <ExperienceRow experienceDetails={edcDetails} />
                </div>
        </div>
            <div className="row section topspace align-items-center">
                <h2 className="section-title" id="projects">Projects</h2>
                <Projects />
            </div>
        </div>
    )
}