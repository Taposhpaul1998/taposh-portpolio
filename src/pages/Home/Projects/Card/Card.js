import React from 'react';
import './Card.css'

const Card = ({ project, hendelDetels }) => {
    const { _id, name, img, live } = project;

    return (
        <>
            <div className='box btn_shadow '>
                <div className='img'>
                    <img src={img} alt="" />
                </div>
                <div className='project_name'>
                    <h3>{name}</h3>
                    <div className='card_icon'>
                        <button onClick={() => hendelDetels(_id)} className='btn_shadow'>Details</button>
                        <a href={live}> <button className='btn_shadow'>Live Site</button></a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;