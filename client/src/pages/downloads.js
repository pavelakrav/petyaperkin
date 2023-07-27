import React, { useContext } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink, Navigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import '../styles/downloads.css';
import DownloadCard from '../components/DownloadCard';


const downloads = observer(() => {
    const activeLink = 'nav-list__link nav-list__link--active';
    const normalLink = 'nav-list__link';
    const CardContent = ['Plans & Schemes', 'Business plan', 'Patent', 'Documents']

    return (
        <div className='cardsList'>
            {CardContent.map((title) => {
                return <DownloadCard title={title} />
            })}
        </div>
    )
});

export default downloads;