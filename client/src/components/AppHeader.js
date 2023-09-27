import React, { useState } from 'react';
import '../styles/AppHeader.css';
import { BurgerMenuIcon, CancelIcon } from './Icons';
import Modal from './Modal';
import NavBar from './NavBar';
import '../styles/adaptive.css';
import { NavLink } from 'react-router-dom';

import { useResize } from '../hooks/useResize';
import {
	ABOUT_ROUTE,
	CONTACTS,
	FOR_INVESTORS,
	MOBILE_WIDTH,
	PATENTS_ROUTE,
	PRODUCT_ROUTE,
	USE_CASES_ROUTE,
} from '../utils/consts';

import { HOME_ROUTE } from '../utils/consts';

export default function AppHeader() {
	const [isMenuOpened, setIsMenuOpened] = useState(false);
	const changeMenuVisibility = () => {
		setIsMenuOpened(!isMenuOpened);
	};
	const { width } = useResize();

	const NavElements = [
		{ path: HOME_ROUTE, label: 'Home' },
		{ path: ABOUT_ROUTE, label: 'About' },
		{ path: PATENTS_ROUTE, label: 'Patents' },
		{ path: PRODUCT_ROUTE, label: 'Product' },
		{ path: USE_CASES_ROUTE, label: 'Use cases' },
		{ path: FOR_INVESTORS, label: 'For investors' },
		{ path: CONTACTS, label: 'Contacts' },
	];
	return (
		<div className="AppHeader">
			<div className="AppHeader__title__container">
				<NavLink className="AppHeader__title" to="/home">
					Awingen
				</NavLink>
				<p className="AppHeader__subtitle">Highway wind turbines</p>
			</div>
			{width < MOBILE_WIDTH ? (
				<div
					className="AppHeader__button"
					onClick={changeMenuVisibility}
				>
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
			) : (
				<div className="AppHeader__linkList">
					{NavElements.map((el) => {
						return (
							<NavLink
								className={({ isActive }) => {
									return isActive
										? 'AppHeader__link__active'
										: 'AppHeader__link';
								}}
								to={el.path}
							>
								{el.label}
							</NavLink>
						);
					})}
				</div>
			)}
		</div>
	);
}
