import React from 'react';
import './About.css'

const About = () => {
    return (
        <div id='about' className='conteiner about'>
            <h2 className='section_title '>About Me</h2>
            <div className='f_flex'>
                <div className='about_left'>
                    <div className="about_img">
                        <img src="https://i.ibb.co/QKx70G2/Taposh.png" alt="" />
                    </div>
                </div>
                <div className='about_info'>
                    <p>I am a front-end web developer. I love to use my creativity and make something new. That's why I love to work with React.js . Over the last year, I gather knowledge in various parts of web development by myself. My ultimate goal is to become an awesome full-stack web developer who can make beautiful UIs and also can handle the back-end smoothly.</p>
                    <p>I like to create and contribute to open source projects. That helps me to learn a ton of new stuff, grow as a developer and support other open source projects. </p>
                </div>
            </div>
        </div>
    );
};

export default About;