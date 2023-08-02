import React, { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink, Navigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import '../styles/about.css';
import pic from '../images/defaultPic.png';

const about = observer(() => {
    const activeLink = 'nav-list__link nav-list__link--active';
    const normalLink = 'nav-list__link';
    const cardsContent = [
        {
            title: 'Hydrogen',
            text: 'The system can be mounted with H2 fueling stations',
        },
        {
            title: 'Solar power',
            text: 'AWINGEN wind turbines can be equipped with solar panels for additional output',
        },
        {
            title: 'Combination',
            text: 'Units are installed on the rooftops to power residental and industrial buildings',
        },
        {
            title: 'Railroad',
            text: 'Awingen wind turbines perfectly fit the railroad infrastructure both in the cities and in areas.',
        },
    ];

    return (
        <div className="cardsList">
            {cardsContent.map((content) => {
                return (
                    <div className="card">
                        <div className="card__pic">
                            <img src={pic} />
                        </div>
                        <div className="card__title">{content.title}</div>
                        <div className="card__text">{content.text}</div>
                    </div>
                );
            })}
        </div>
    );
});

export default about;
