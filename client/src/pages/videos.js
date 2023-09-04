import PlayIcon1, { PlayIcon } from '../components/Videos.js'
import React, { useContext, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink, Navigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import '../styles/downloads.css';
import Card from '../components/Card';
import { DownloadIcon } from '../components/Icons';
import Modal from '../components/Modal';
import ReactPlayer from 'react-player'
import "../styles/videos.css"
import playBtn from "../images/play.png"
import "../images/play.svg"
import Awingen_Trim from './Awingen_Trim.mp4';
import ExampleVideo from '../images/ImageVideoExample.png'
import pic from '../images/defaultPic.png';
import ModalVideo from '../components/ModalVideo.js';
import Awingen_Prewiev from "../images/Awingen_Preview.png"


const videos = observer(() => {
    const [isModalVisible, setIsModalVisible] = useState(true);
    const [dirName, setdirName] = useState('');
    const onClickHandler = (event, name) => {
        setIsModalVisible(!isModalVisible);
        setdirName(name);
    };
    const files = [
            ];
    const iconSize = 50;
    const CardContent = [
        { title: "Video1"},
        { title: "Video2"},
        { title: "Video3"},
        { title: "Video4"},
    ];


    return (
        <>  
        
        <div className="cardsList">
            {CardContent.map((content) => {
                return (
                    <>
                    <div className="cardVideos">
                                <img src = {Awingen_Prewiev} className='smallVideo'/>
                                <a href="" className='play_btn' onClick = {onClickHandler}>
                                <img src={playBtn} className='play_btn'/>
                                </a>    
                    </div>

                    </>
                );
            })}
        </div>
        {isModalVisible && (
                <ModalVideo type={'Modal'} onClose={onClickHandler}>
                    <video className="Modal__Video1" controls>
                        <source src={Awingen_Trim} type="video/mp4" />
                    </video>
                </ModalVideo>
            )}
        </>
    );
    });

export default videos;
