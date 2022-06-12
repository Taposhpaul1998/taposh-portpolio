import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <section className='hero' id='home'>
            <div className="conteiner f_flex top">
                <div className="left top">
                    <h2>Hello I'm </h2>
                    <h1>Taposh Paul</h1>
                    <h1> a <span> Front-End Devolaper
                    </span></h1>
                    <p>I am a front-end web developer. I love to use my creativity and make something new. That's why I love to work with React.js .</p>
                    <div className="hero_btn">
                        <a href="#contact"> <button className='btn_shadow'>HIRE ME</button></a>

                        <a href="https://drive.google.com/u/0/uc?id=1XPFfAhZcJlZlaTZ6vPVbG_f-I6P2KkwV&export=download"><button className='btn_shadow'>RESUME</button></a>
                    </div>
                </div>
                <div className="right">
                    <div className="right_img">
                        <img src="https://i.ibb.co/QKx70G2/Taposh.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;