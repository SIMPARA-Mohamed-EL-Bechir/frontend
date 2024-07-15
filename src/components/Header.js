import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logo.svg';
import './Header.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
        if (window.innerWidth > 768) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className="nav-bar">
            <div className="logo-container">
                <a href="/">
                    <img src={logo} alt="logo" height="40" className="logo-img" />
                </a>
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
                {isMenuOpen ? '✖' : '☰'}
            </div>
            <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                <li>
                    <a href="/home">Home</a>
                </li>
                <li>
                    <a href="/facteur">Facteurs</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
}
