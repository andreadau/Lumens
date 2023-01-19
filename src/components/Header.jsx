import ReactDOM from 'react-dom'
import { useState, useEffect } from 'react'
import NavBarTop from './NavBarTop'
import NavBar from './NavBar'
import Hamburger from '../UI/Hamburger'
import '../assets/styles/Header.scss'
import '../UI/styles/CommonClass.scss'
import '../assets/styles/NavBar.scss'

const Header = () => {
    const [stickyClass, setStickyClass] = useState("navBarContainer");
    const [headSticky, setheadSticky] = useState("navBarContainer");
    const [isMobile, setIsMobile] = useState(false);
    const [showHamburger, setShowHamburger] = useState(false);

    useEffect(() => {
        stickNavbar();
        window.addEventListener('scroll', stickNavbar);
        return () => {
            window.removeEventListener('scroll', stickNavbar);
        };
    }, [showHamburger]);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
    };

    const stickNavbar = () => {
        if (window.scrollY > 0 || showHamburger) {
            setStickyClass("navBarContainerActive");
            setheadSticky("");
        } else {
            setStickyClass("navBarContainer");
            setheadSticky("fixed");
        }
    };

    const showHamburgerMenu = () => {
        setShowHamburger(!showHamburger);
    };

    return (
        <header className={headSticky} >
            <div className={stickyClass} >
                <NavBarTop />
                {isMobile ? <Hamburger onClick={showHamburgerMenu} showHamburger={showHamburger}/> : null}
                <div className="headerHero">
                    <h1 className="headerHeroTitle">Lumens</h1>
                </div>
                {isMobile && !showHamburger ? null : <NavBar />}
            </div>
        </header>
    );
}

export default Header;