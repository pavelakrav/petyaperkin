import React from "react";
import "../styles/Card.css";

export default function Card({ title, icon, onClick = () => {} }) {
    return (
        <div className='card'>
            <div className='card__hat1' />
            {/* <div className='card__hat'>
                <div className='card__hat-top' />
                <div className='card__hat-left' />
                <div className='card__hat-right' />
            </div> */}
            <div className='card__title'>{title}</div>
            <div className='card__button' onClick={onClick}>
                {icon}
            </div>
            <div>enhanced safety</div>
        </div>
    );
}
