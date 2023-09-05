import React, { useState } from 'react';
import '../styles/AppHeader.css';
import { BurgerMenuIcon, CancelIcon } from './Icons';
import Modal from './Modal';
import NavBar from './NavBar';
import "../styles/adaptive.css"

export default function AppHeader() {
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const changeMenuVisibility = () => {
        setIsMenuOpened(!isMenuOpened);
    };
    return (
        <div className="AppHeader">
            <div className="AppHeader__title">Awingen</div>
            <div className="AppHeader__button" onClick={changeMenuVisibility}>
                {isMenuOpened ? (
                    <CancelIcon size={40} color="#137C67" />
                ) : (
                    <BurgerMenuIcon size={40} color="#137C67" />
                )}

                {isMenuOpened && (
                    <Modal type={'SideMenu'} onClose={changeMenuVisibility}>
                        <NavBar />
                    </Modal>
                )}
            </div>
        </div>
    );
}
