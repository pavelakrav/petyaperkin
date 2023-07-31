import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink, Navigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import "../styles/downloads.css";
import Card from "../components/Card";
import { DownloadIcon } from "../components/Icons";

const downloads = observer(() => {
    const CardContent = [
        "Plans & Schemes",
        "Business plan",
        "Patent",
        "Documents",
    ];

    return (
        <div className='cardsList'>
            {CardContent.map((title) => {
                return <Card title={title} icon={<DownloadIcon />} />;
            })}
        </div>
    );
});

export default downloads;
