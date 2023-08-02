import React, {useContext} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink, Navigate} from "react-router-dom";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useNavigate} from "react-router-dom"
import Card from '../components/Card';


const videos = observer(() => {
        const iconSize = 50;
        const CardContent = [

        ];
    
        return (
            <div className='cardsList'>
                {CardContent.map((content) => {
                    return <Card {...content} />;
                })}
            </div>
        );
    });


export default videos;