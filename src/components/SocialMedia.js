import React from 'react';

export default function SocialMedia(props) {

    return (
        <div className="media-component">

            <a href={props.mediaInfo.link}>
                <div className="link-icon-divider">
                    {props.mediaInfo.icon}
                    <span className="link-text">{props.mediaInfo.link}</span>
                </div>
            </a>

        </div>
    )
}