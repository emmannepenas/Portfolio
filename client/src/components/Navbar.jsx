import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles//Navbar.css';
import Emmanne from '../assets/images/emmanne.jpg';

export default function Navbar () {
    return (
        <header className="navbar">
            <div className="logo-container">
                <img 
                   src={Emmanne} 
                   alt="Emmanne Profile Logo" 
                   className="logo-img"
                />
                <span className="logo-text">Emmanne's Portfolio</span>
            </div>

            <nav className="nav-links">
                <NavLink
                    to="/"
                    className={({ isActive}) => (isActive ? 'nav-btn active' : 'nav-btn')}
                    >
                        Home
                    </NavLink>
                     <NavLink
                    to="/about"
                    className={({ isActive}) => (isActive ? 'nav-btn active' : 'nav-btn')}
                    >
                        About
                    </NavLink>
                     <NavLink
                    to="/projects"
                    className={({ isActive}) => (isActive ? 'nav-btn active' : 'nav-btn')}
                    >
                        Projects
                    </NavLink>
                    <NavLink
                    to="/skills"
                    className={({ isActive}) => (isActive ? 'nav-btn active' : 'nav-btn')}
                    >
                        Skills
                    </NavLink>
            </nav>
        </header>
    )
}