import React from 'react';

export default function Header() {


    return (
        <div id="head" className="parallax">
            <h1 id="logo" className="text-center">
                    <div className="title">
                        <h2 className="header-fullname">Oliver Rzepecki</h2>
                    </div>
                    <div className="tagline">
                        <h4 className="header-title">Aspiring Software Engineer</h4>
				        <a href="mailto:oliver.rzepecki@rutgers.edu">
                            <h5 className="header-email">
                                oliver.rzepecki@rutgers.edu
                            </h5>
                        </a>
                    </div>
            </h1>
        </div>
    )
}