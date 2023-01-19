import React from 'react';
import { useState, useEffect } from 'react';
import '../UI/styles/Hamburger.scss';

const Hamburger = ({onClick, showHamburger}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [stickyClass, setStickyClass] = useState(window.scrollY > 0 || showHamburger ? "hamburgerBlack" : "hamburgerWhite");

    useEffect(() => {
        stickNavbar();
        window.addEventListener('scroll', stickNavbar);
        return () => {
            window.removeEventListener('scroll', stickNavbar);
        };
    }, [showHamburger]);

    const stickNavbar = () => {
        if (window.scrollY > 0 || showHamburger) {
            setStickyClass("hamburgerBlack");
        } else {
            setStickyClass("hamburgerWhite");
        }
    };


    const toggleMenu = () => {
        setIsOpen(!isOpen);
        onClick();
    }

    return (
        <button className={`hamburger ${isOpen ? "openBurger" : ""}`} onClick={toggleMenu}>
            <span className={`hamburger-line ${stickyClass}`}></span>
            <span className={`hamburger-line ${stickyClass}`}></span>
            <span className={`hamburger-line ${stickyClass}`}></span>
        </button>
    )
}

export default Hamburger;