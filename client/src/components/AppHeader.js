import React from 'react';
import '../styles/AppHeader.css';
import { BurgerMenuIcon } from './Icons';

export default function AppHeader() {
    return (
        <div className='AppHeader'>
            <div className='AppHeader__title'>Awingen</div>
            <div className='AppHeader__button'>
                <BurgerMenuIcon size={40} color='#137C67'/>
            </div>
        </div>
    )
}
