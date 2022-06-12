import React from 'react';
import './MySkills.css'

const MySkills = () => {
    return (
        <div id='skill' className='conteiner skills'>
            <h2 className='section_title '>My Skills</h2>
            <div className="f_flex skaill-conteiner">
                <div className='exprience-info'>
                    <h2>My Skills and Expriences.</h2>
                    <p>I am a front-end web developer. I love to use my creativity and make something new. That's why I love to work with React.js . Over the last year, I gather knowledge in various parts of web development by myself....</p>
                </div>
                <div className='skills-info'>
                    <div className='bars'>
                        <div className="info">
                            <span>HTML</span>
                            <span>90%</span>
                        </div>
                        <div className="line html"></div>
                    </div>
                    <div className='bars'>
                        <div className="info">
                            <span>CSS</span>
                            <span>70%</span>
                        </div>
                        <div className="line css"></div>
                    </div>
                    <div className='bars'>
                        <div className="info">
                            <span>JAVASCRIPT</span>
                            <span>60%</span>
                        </div>
                        <div className="line js"></div>
                    </div>
                    <div className='bars'>
                        <div className="info">
                            <span>REACT</span>
                            <span>70%</span>
                        </div>
                        <div className="line react"></div>
                    </div>
                    <div className='bars'>
                        <div className="info">
                            <span>NODE.JS</span>
                            <span>50%</span>
                        </div>
                        <div className="line node"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MySkills;