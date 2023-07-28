import React, { useState } from "react";
import "../styles/AppHeader.css";
import { BurgerMenuIcon, CancelIcon } from "./Icons";
import SideMenu from "./SideMenu";

export default function AppHeader() {
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const changeMenuVisibility = () => {
        setIsMenuOpened(!isMenuOpened);
    };
    return (
        <div className='AppHeader'>
            <div className='AppHeader__title'>Awingen</div>
            <div className='AppHeader__button' onClick={changeMenuVisibility}>
                {isMenuOpened ? (
                    <CancelIcon size={40} color='#137C67' />
                ) : (
                    <BurgerMenuIcon size={40} color='#137C67' />
                )}

                {isMenuOpened && <SideMenu onClose={changeMenuVisibility} />}
            </div>
        </div>
    );
}
