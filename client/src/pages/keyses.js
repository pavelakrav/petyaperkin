import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink, Navigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import {
    EVIcon,
    LightBuldIcon,
    QuickIcon,
    TreeIcon,
} from "../components/Icons";

const keyses = observer(() => {
    const iconSize = 50;
    const CardContent = [
        { title: "Eco friendly", icon: <TreeIcon size={iconSize} />, text: 'no extra space required' },
        { title: "Quick installation", icon: <QuickIcon size={iconSize} />, text: 'much faster than competitors' },
        {
            title: "Highway illumination",
            icon: <LightBuldIcon size={iconSize} />,
            text: 'enhanced safety'
        },
        { title: "EV charging", icon: <EVIcon size={iconSize} />, text: 'electricity for remote locations' },
    ];

    return (
        <div className='cardsList'>
            {CardContent.map((content) => {
                return <Card {...content} />;
            })}
        </div>
        
    );
});

export default keyses;
