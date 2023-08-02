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
import { PlayIcon } from '../components/Videos';
import xyu from "../images/play.png"


const videos = observer(() => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [dirName, setdirName] = useState('');

    const files = [
        [
            
        ],
        [

        ],
        [],
        [

        ],
    ];

    const onClickHandler = (event, name) => {
        setIsModalVisible(!isModalVisible);
        setdirName(name);
    };

    const CardContent = [
        'video1',
        'video2',
        'video3',
        'video4',
    ];

    return (
        <>
            <div className="cardsList">
                {CardContent.map((title) => {
                    return (
                        <Card
                            title={title}
                            icon={<PlayIcon size={3} />}
                            onClick={onClickHandler}
                        />
                    );
                })}
            </div>
            {isModalVisible && (
                <Modal type={'Modal'} onClose={onClickHandler}>
                    <div className="filesList">
                        <ul>
                            {dirName === 'Plans & Schemes' &&
                                files[0].map((file) => {
                                    return (
                                        <li>
                                            <a
                                                href={`docs/PlansSchemes/${file}`}
                                                download
                                            >
                                                {file}
                                            </a>
                                        </li>
                                    );
                                })}
                            {dirName === 'Business plan' &&
                                files[1].map((file) => {
                                    return (
                                        <li>
                                            <a
                                                href={`docs/BusinessPlans/${file}`}
                                                download
                                            >
                                                {file}
                                            </a>
                                        </li>
                                    );
                                })}
                            {dirName === 'Patent' &&
                                files[2].map((file) => {
                                    return (
                                        <li>
                                            <a
                                                href={`docs/Patent/${file}`}
                                                download
                                            >
                                                {file}
                                            </a>
                                        </li>
                                    );
                                })}
                            {dirName === 'Documents' &&
                                files[3].map((file) => {
                                    return (
                                        <li>
                                            <a
                                                href={`docs/Documents/${file}`}
                                                download
                                            >
                                                {file}
                                            </a>
                                        </li>
                                    );
                                })}
                        </ul>
                    </div>
                </Modal>
            )}
        </>
    );
});

export default videos;
