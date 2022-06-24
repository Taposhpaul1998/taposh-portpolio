import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './Card.css'

const Card = ({ project }) => {
    const [modal, setModal] = useState(false)
    const { name, img, live, description, tecnolgy } = project;


    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <>
            <div className='box btn_shadow '>
                <div className='img'>
                    <img onClick={toggleModal} src={img} alt="" />
                </div>
                <div className='project_name'>
                    <h3>{name}</h3>
                    <div className='card_icon'>
                        <button onClick={toggleModal} className='btn_shadow'>Details</button>
                        <a href={live}> <button className='btn_shadow'>Live Site</button></a>
                    </div>
                </div>
            </div>

            {/* popup modal  */}
            {
                modal && (
                    <div className="modal">
                        <div onClick={toggleModal} className="overlay"></div>
                        <div className="modal-content">
                            <div className="modal-img left">
                                <a href={live}> <img src={img} alt="" /></a>
                            </div>
                            <div className="modal-text right">
                                <div className='modal-info'>
                                    <h3>{name}</h3>
                                    <p>{description}</p>
                                    <p>{tecnolgy}</p>
                                </div>
                                <div className='modal-btn'>
                                    <a href={live}> <button className='btn_shadow'>Live Site</button></a>
                                    <button onClick={toggleModal} className='modal-close'><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default Card;