import React, { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink, Navigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import Awingen_Trim from './Awingen_Trim.mp4';
import '../styles/videos.css';

const main = observer(() => {
    const activeLink = 'nav-list__link nav-list__link--active';
    const normalLink = 'nav-list__link';

    return (
        <>
            <video className="videoTag" autoPlay loop>
                <source src={Awingen_Trim} type="video/mp4" />
            </video>
            <div id="fashion">
                <h2>
                    <p>AUTONOMOUS</p>WIND GENERATORS
                </h2>
            </div>
        </>
    );
});

export default main;
