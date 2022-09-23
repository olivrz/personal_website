import React from 'react';
import {Link} from 'react-router-dom';


export default function SocialMedia(props) {

    return (
        <div className="media-component">

            <a href={props.mediaInfo.link}>
                <span>{props.mediaInfo.link}</span>
                {props.mediaInfo.icon}
            </a>

        </div>
    )
}