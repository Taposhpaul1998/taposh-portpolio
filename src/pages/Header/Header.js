import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import './Header.css'

const Header = () => {
    //when scroll header at top

    window.addEventListener("scroll", function () {
        const header = this.document.querySelector('.header')
        header.classList.toggle('active', window.scrollY > 80)
    })

    // toggle menu
    const [mobile, setMobile] = useState(false)

    return (
        <div className='header'>
            <div className="conteiner d_flex">
                <div className="logo">
                    <h2>Taposh <span>paul</span></h2>
                </div>
                <div className="navlink">
                    <ul className={mobile ? "nav-links-mobile" : "link f_flex  uppercase"} onClick={() => setMobile(false)}>
                        <li><a href="/">HOME</a></li>
                        <li><a href="/home#skill">SKILL</a></li>
                        <li><a href="/home#project">PROJECTS</a></li>
                        <li><Link to="/blog">BLOG</Link></li>
                        <li><a href="/home#about">ABOUT</a></li>
                        <li><a href="/home#contact">CONTACT</a></li>
                    </ul>
                    <button className='toggle' onClick={() => setMobile(!mobile)}>
                        {
                            mobile ? <FontAwesomeIcon icon={faXmark} className="home-btn close" /> : <FontAwesomeIcon icon={faBars} className="open" />
                        }
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;