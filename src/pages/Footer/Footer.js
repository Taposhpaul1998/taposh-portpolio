import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='footer f_flex'>
            <div>
                <div className='icon'>
                    <button>
                        <a href="https://www.linkedin.com/in/taposh-paul-2295a9241/"> <FontAwesomeIcon icon={faLinkedin} className="btn_shadow footer-icon" /></a>
                    </button>
                    <button>
                        <a href="https://web.facebook.com/profile.php?id=100010956646799"> <FontAwesomeIcon icon={faFacebook} className="btn_shadow footer-icon" /></a>
                    </button>
                    <button>
                        <a href="https://github.com/Taposhpaul1998">
                            <FontAwesomeIcon icon={faGithub} className="btn_shadow footer-icon" />
                        </a>
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faEnvelope} className="btn_shadow footer-icon" />
                    </button>
                </div>
                <div className='copy_right'>
                    <p> &copy; {year} All Rights Reserved.</p>
                </div>
            </div>
        </div>

    );
};

export default Footer;