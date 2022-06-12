import React from 'react';
import './Card.css'

const Card = ({ project }) => {
    const { id, name, img } = project;

    return (
        <>
            <div className='box btn_shadow '>
                <div className='img'>
                    <img src={img} alt="" />
                </div>
                <div className='project_name'>
                    <h3>{name}</h3>
                    <button className='btn_shadow'>Details</button>
                    <button className='btn_shadow live'>Live Site</button>
                </div>
            </div>
        </>
    );
};

export default Card;