import React from 'react';

function About(props) {
    return (
        <div>
            <h1 className="text-6xl mb-10 text-center">
                Github Account Finder
            </h1>
            <p className='text-center text-2xl text-wrap'>
                GitHub, Inc. is a provider of Internet hosting for software development and version control using Git.
                It offers the distributed version control and source code management functionality of Git, plus its own
                features. Wikipedia
                Users: 73 million (as of November 2021)
                Founded: 2008
                CEO: Thomas Dohmke (Nov 15, 2021–)
                Headquarters: San Francisco, California, United States
                Founders: Tom Preston-Werner, P. J. Hyett, Scott Chacon, Chris Wanstrath
                Parent organization: Microsoft Corporation
                Subsidiaries: Good Software LLC, Semmle Limited, npm, Inc.
            </p>
        </div>
    );
}

export default About;