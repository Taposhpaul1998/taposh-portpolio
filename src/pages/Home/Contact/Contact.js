import React, { useRef } from 'react';
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7bq5r5i', 'template_5a516rq', e.target, 'uGDquFt1kmtuNUdiO')
            .then((result) => {
                alert("success to send email");
            }, (error) => {
                alert(error.text);
            });
    };
    return (
        <div id='contact' className='conteiner contact'>
            <h2 className='section_title '>Contact Me</h2>
            <div className='f_flex'>
                <div className='socile-link'>
                    <div className='contact_info'>
                        <h4> <FontAwesomeIcon icon={faLocationDot} className="contact_icon" /> Location: <span>Mymenshing,Bangladesh</span></h4>
                        <h4><FontAwesomeIcon icon={faPhone} className="contact_icon" /> Phone: <span>+880 01312607751</span> </h4>
                        <h4><FontAwesomeIcon icon={faEnvelope} className="contact_icon" /> Email: <span>taposhp05@gmail.com</span></h4>
                    </div>
                    <div className="socile_icon">
                        <button>
                            <a href="https://www.linkedin.com/in/taposh-paul-2295a9241/"> <FontAwesomeIcon icon={faLinkedin} className="btn_shadow socile-btn" /></a>
                        </button>
                        <button>
                            <a href="https://web.facebook.com/profile.php?id=100010956646799"> <FontAwesomeIcon icon={faFacebook} className="btn_shadow socile-btn" /></a>
                        </button>
                        <button>
                            <a href="https://github.com/Taposhpaul1998">
                                <FontAwesomeIcon icon={faGithub} className="btn_shadow socile-btn" />
                            </a>
                        </button>
                        <button>
                            <FontAwesomeIcon icon={faEnvelope} className="btn_shadow socile-btn" />
                        </button>

                    </div>

                </div>
                <div className='contact-from'>
                    <h2>Message me</h2>
                    <form ref={form} onSubmit={sendEmail}>
                        <input className='input-fild' type="text" name="user_name" placeholder='Name' />
                        <input className='input-fild' type="email" name="user_email" placeholder='Email' />
                        <input className='input-fild' type="text" name="user_subject" placeholder='Subject' />
                        <textarea className='input-fild' name="message" rows='4' placeholder='Meassege...'></textarea>
                        <button type='submit' className='btn_shadow' >Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;