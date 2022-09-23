import React from 'react';
import {Link} from 'react-router-dom';


export default function SocialMedia(props) {

    return (
        <div className="media-component">

            <a href={props.mediaInfo.link}>
                {props.mediaInfo.icon}
                <span>{props.mediaInfo.link}</span>
            </a>

        </div>
    )
}