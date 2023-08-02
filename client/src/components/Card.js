import React from "react";
import "../styles/Card.css";

export default function Card({ title, icon, text, onClick = (e, title) => { } }) {
    return (
        <div className='card'>
            <div className='card__hat' />
            <div className='card__title'>{title}</div>
            <div className='card__button' onClick={(e) => onClick(e, title)}>
                {icon}
            </div>
            {text && <div className="card__text">{text}</div>}
        </div>
    );
}
