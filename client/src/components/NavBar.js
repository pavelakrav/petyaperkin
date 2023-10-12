import React from 'react';
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import '../styles/stylenav.css';

const NavBar = observer(() => {
	const activeLink = 'nav-list__link nav-list__link--active';
	const normalLink = 'nav-list__link';

	const NavLinks = [
		{ title: 'Main', path: '/' },
		{ title: 'Use cases', path: '/about' },
		{ title: 'Downloads', path: '/downloads' },
		{ title: 'Key features', path: '/keys' },
		{ title: 'Videos', path: '/videos' },
	];

	return (
		<nav className="nav">
			<div className="container">
				<div className="nav-row">
					<ul className="nav-list">
						{NavLinks.map((link) => {
							return (
								<li className="nav-list__item">
									<NavLink
										to={link.path}
										className={({ isActive }) =>
											isActive ? activeLink : normalLink
										}
									>
										{link.title}
									</NavLink>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
});

export default NavBar;
