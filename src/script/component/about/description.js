import React from 'react';

export default () => {
    return (
        <div className="description">
            <h1 itemProp="name">Andre Kuznetcov</h1>
            <h3 itemProp="jobTitle">Angular/Node Front-end Developer</h3>
            <p itemProp="description">Hi, I'm a freelance web developer
            currently living in welcoming Vancouver. Most of my day I work on
            commercial and personal projects that usually end up being
            full-stack front-end.</p>
            <p>During the day offs I usually read, dance, and furiously trying
            to teach myself White Hat Hacking and Network Security.</p>
            <p>Need a mobile-optimized landing page, web-application, or just a
            simple website? Feel free to contact me anytime!
            <span> 😉</span></p>
        </div>
    );
};