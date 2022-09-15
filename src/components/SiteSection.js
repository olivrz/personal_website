import React from 'react';
import AboutMe from './AboutMe';

export default function SiteSection(props) {

    const renderSection = (sectionName) => {
        switch(sectionName) {
            case 'about-me': {
                return <AboutMe />
            }
        }
    }

    return(
        <div className='flex-container'>
            {renderSection(props.name)}
        </div>
    );

};