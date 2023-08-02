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

const downloads = observer(() => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [dirName, setdirName] = useState('');

    const files = [
        [
            'AG 01.001 SH.jpg',
            'AG01 all.pdf',
            'AG01.000.00GCH.pdf',
            'AG01.001.00SB.pdf',
            'AG01.002.00SB.pdf',
            'AG01.003.00SB.pdf',
            'Awingen_1.PNG',
            'Awingen_2.png',
            'Awingen_3.PNG',
            'Awingen_4.PNG',
            'Awingen_5.png',
            'Awingen_6.png',
            'Protocol_of_generators_testing.pdf',
            'Scheme-SHU-12В-3G (v3).pdf',
            'VP-SHU-12В-3G (v3).docx',
            'VP-SHU-12В-3G (v3).pdf',
        ],
        [
            'Awingen_Finanzplanung - Unter Stress.ods',
            'Awingen_Finanzplanung - Unter Stress.ods',
            'Businessplan 2020_Awingen_English.pdf',
        ],
        ['Awingen_Patent.pdf'],
        [
            'Awingen_EU_Patent.pdf',
            'Awingen_Patent.pdf',
            'AWINGEN1_Innovation Fund (EU) _ Application Form (2).pdf',
        ],
    ];

    const onClickHandler = (event, name) => {
        setIsModalVisible(!isModalVisible);
        setdirName(name);
    };

    const CardContent = [
        'Plans & Schemes',
        'Business plan',
        'Patent',
        'Documents',
    ];

    return (
        <>
            <div className="cardsList">
                {CardContent.map((title) => {
                    return (
                        <Card
                            title={title}
                            icon={<DownloadIcon size={50} />}
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

export default downloads;
