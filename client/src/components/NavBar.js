import React from 'react';
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import './stylenav.css';

const NavBar = observer(() => {
	const activeLink = 'nav-list__link nav-list__link--active';
	const normalLink = 'nav-list__link';

	return (
		<nav className="nav">
			<div className="container">
				<div className="nav-row">
					<ul className="nav-list">
						<li className="nav-list__item">
							<NavLink
								to="/"
								className={({ isActive }) =>
									isActive ? activeLink : normalLink
								}
							>
								Main
							</NavLink>
						</li>

						<li className="nav-list__item">
							<NavLink
								to="/about"
								className={({ isActive }) =>
									isActive ? activeLink : normalLink
								}
							>
								Use cases
							</NavLink>
						</li>

						<li className="nav-list__item">
							<NavLink
								to="/downloads"
								className={({ isActive }) =>
									isActive ? activeLink : normalLink
								}
							>
								Downloads
							</NavLink>
						</li>
						<li className="nav-list__item">
							<NavLink
								to="/keys"
								className={({ isActive }) =>
									isActive ? activeLink : normalLink
								}
							>
								Key features
							</NavLink>
						</li>
						<li className="nav-list__item">
							<NavLink
								to="/videos"
								className={({ isActive }) =>
									isActive ? activeLink : normalLink
								}
							>
								Videos
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
});

export default NavBar;
