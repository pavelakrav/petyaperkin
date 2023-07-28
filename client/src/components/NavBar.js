import React, { useContext } from "react";
import { Context } from "../index";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
import { NavLink, Navigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import "./stylenav.css";

const NavBar = observer(() => {
    const activeLink = "nav-list__link nav-list__link--active";
    const normalLink = "nav-list__link";

    return (
        <nav className='nav'>
            <div className='container'>
                <div className='nav-row'>
                    <NavLink to='/' className='logo'>
                        <strong>AWINGEN</strong>
                    </NavLink>

                    <ul className='nav-list'>
                        <li className='nav-list__item'>
                            <NavLink
                                to='/about'
                                className={({ isActive }) =>
                                    isActive ? activeLink : normalLink
                                }
                            >
                                About
                            </NavLink>
                        </li>

                        <li className='nav-list__item'>
                            <NavLink
                                to='/downloads'
                                className={({ isActive }) =>
                                    isActive ? activeLink : normalLink
                                }
                            >
                                Downloads
                            </NavLink>
                        </li>
                        <li className='nav-list__item'>
                            <NavLink
                                to='/keys'
                                className={({ isActive }) =>
                                    isActive ? activeLink : normalLink
                                }
                            >
                                Keyses
                            </NavLink>
                        </li>
                        <li className='nav-list__item'>
                            <NavLink
                                to='/videos'
                                className={({ isActive }) =>
                                    isActive ? activeLink : normalLink
                                }
                                //onClick={() => logOut()}
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
